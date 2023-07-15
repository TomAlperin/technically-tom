If you have followed my guide on setting up Motion webcam software, or possibly another guide, you will likely have encountered a minor annoyance.  If you do not intend to run the software 24/7, you need to turn it on and off using the command line.

Also, restarting the computer automatically turns the software back on which might not be the desired behavior. Completely disabling Motion involves not only stopping the service, but also changing the file /etc/default/motion to contain “start_motion_daemon=no” instead of  “start_motion_daemon=yes”. You could use bash and some crontab entries to disable and enable the webcam, but lets take it one step further. Since most of use have grown accustomed to carrying our smart phones with us everywhere, we can instead write a script that checks for our device’s MAC address and enables or disables motion based on this instead.

I am also using text to speech scripts by Steven Hickson which you can find here. If not using this the “tts” commands you should remove or replace with whatever text to speech option you choose. On activation and deactivation the script sends mail messages using the same software used by motion to send out motion detection events.

First install arp-scan. You will need this to look for device presence on your network.

```shell
sudo apt-get update
sudo apt-get install arp-scan
```

The following script handles two devices, however it could be easily rewritten to handle only one device or possibly more. Put the following into a file called welcomeHome.sh in your home directory:

```shell
#!/bin/bash

#Turn on motion webcam if phones not found
scan=$(arp-scan -gq --retry=10 --backoff=1 --interface=eth0 10.0.1.3 10.0.1.4) #use x.x.x.x/24 to scan entire subnet if you have not assigned static IPs
addresses to your phones
deviceOne=$(echo $scan | grep -ic "xx:xx:xx:xx:xx:xx")
deviceTwo=$(echo $scan | grep -ic "xx:xx:xx:xx:xx:xx")
if [[ $deviceOne -ne 0 || $deviceTwo -ne 0 ]]
then
 if grep -ic "yes" /etc/default/motion > /dev/null
 then
 sudo service motion stop
 echo "start_motion_daemon=no" > '/etc/default/motion'
 tts "Stopping Security Camera."
 echo 'Stopping security camera.' | mail -s 'Webcam' you@youremailaddress.com
 fi
else
 if grep -ic "no" /etc/default/motion > /dev/null
 then
 echo "start_motion_daemon=yes" > '/etc/default/motion'
 sudo service motion start
 tts "Starting Security Camera."
 echo 'Starting security camera.' | mail -s 'Webcam' you@youremailaddress.com
 fi
fi

#Welcome Home Greetings
if [[ $deviceOne -ne 0 ]]
then
 if [[ $(grep -ic "One" /home/pi/home.txt) -eq 0 ]]
 then
 tts "Welcome home person number one."
 fi
 oneHome="One"
else
 oneHome=""
fi
if [[ $deviceTwo -ne 0 ]]
then
 if [[ $(grep -ic "Two" /home/pi/home.txt) -eq 0 ]]
 then
 tts "Welcome home person number two."
 fi
 twoHome="Two"
else
 twoHome=""
fi
home="$oneHome $twoHome"
if [[ "$home" != $(cat "/home/pi/home.txt") ]]
then
 echo "$oneHome $twoHome" > /home/pi/home.txt
fi
```

You will need to run this as root. Add the following entry to cron with:

```shell
sudo crontab -e
```

and adding the following line:

```shell
* * * * * /home/pi/welcomeHome.sh >/dev/null 2>&1
```
It is important to use sudo otherwise the user crontab will be edited instead and the commands will not run as root. I also had to change permissions on some of the text to speech files so that the “tts” command would continue to work without root for some other use cases that did not require root.

“/dev/shm/speak.mp3”, “/dev/shm/tmp.mp3” and “/dev/shm/voice.log” may need their permissions set so that they can be read and written to.

You may need to adjust “–retry” on the arp-scan to reliably detect nearby devices. How reliably this works depends on the device you use as your “key” and whether it remains connected to the network.