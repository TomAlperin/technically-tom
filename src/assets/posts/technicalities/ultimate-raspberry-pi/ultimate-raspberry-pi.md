There are many projects using sensors and motors that can be done with the Raspberry Pi, but if you just want a nice media center, a few comparisons come to mind. The Apple TV is now selling for about $70. While the Raspberry Pi 2 sells for $35, it’s actual cost is going to be over $100. If you compare the feature set of the Apple TV to the most popular media center available on the Pi, it looks like an easy win for the Apple TV, however what really sets the Raspberry Pi apart is how you can customize and add features.

There are several distributions available that are customized for individual tasks, however lets put together a single install so we don’t have to swap SD cards and reboot every time we want a different function.

### Install Raspbian Image using a Mac.
Use disk utility to unmount (not eject) the SD card you will be writing the image to.

```shell
sudo dd if=/path/of/raspbian/image.img of=/dev/sdaN bs=1M
```
It’s very important to enter this correctly. The N in sdaN should match your SD card as listed in the system report. Do this wrong and you could erase the wrong drive.

On first launch, run rasps-config and set options:

Boot into desktop.
At least 160 for memory split.
This will also be a good time to change your password, hostname, and change internationalization options.

### Create a USB install Using Grsync For Better Performance
See the guide for installing Grsync to get better performance with a USB flash drive. Grsync is also great for doing bootable back-ups of your install that are easy to restore from.

### For the desktop environment, I currently prefer xfce
```shell
sudo apt-get install xfce4
```
Option extras for xfce:
```shell
sudo apt-get install xfce4-goodies
```
### Install NetworkManager
```shell
sudo apt-get install network manager network-manager-gnome
```
Bonus! GUI OpenVPN
```shell
sudo apt-get install network-manager-openvpn network-manager-openvpn-gnome
```
Edit the /etc/network/interfaces file and comment out everything except:

auto lo
iface lo inet loopback
This will allow NetworkManager to control the ethernet and wireless interfaces.

### Install Kodi
Add Michael Gorven’s repository.
```shell
sudo nano /etc/apt/sources.list.d/mene.list
```
enter the following and save it with <control x>:
```shell
deb http://archive.mene.za.net/raspbian wheezy contrib
```
Add key to Michael’s repository.
```shell
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-key 5243CDED
```
We have to create the group “input” if it doesn’t exist.
```shell
sudo addgroup --system input
```
Install kodi
```shell
sudo apt-get update
sudo apt-get install kodi
```
Create & edit the following file:
```shell
sudo nano /etc/udev/rules.d/99-input.rules
```
enter the following text and save it:
```shell
SUBSYSTEM==input, GROUP=input, MODE=0660
KERNEL==tty[0-9]*, GROUP=tty, MODE=0660
```
Create & edit the following file:
```shell
sudo nano /etc/udev/rules.d/10-permissions.rules
```
enter this text and save it:

```shell
# input
KERNEL=="mouse*|mice|event*",   MODE="0660", GROUP="input"
KERNEL=="ts[0-9]*|uinput",      MODE="0660", GROUP="input"
KERNEL==js[0-9]*,               MODE=0660, GROUP=input
# tty
KERNEL==tty[0-9]*,              MODE=0666
# vchiq
SUBSYSTEM==vchiq,  GROUP=video, MODE=0660
```
run the following commands for your user:
```shell
sudo usermod -a -G audio username
sudo usermod -a -G video username
sudo usermod -a -G input username
sudo usermod -a -G dialout username
sudo usermod -a -G plugdev username
sudo usermod -a -G tty username
```
### Install Cups Print Server for AirPrint (OpenVPN optional)
See my guide for AirPrint over OpenVPN. Don’t worry about the VPN related parts of the install unless you want to be able to print remotely.

### Install Forked-DAAPD for AirPlay music to multiple Speakers
sudo nano /etc/apt/sources.list
Add this line to file:

deb http://www.gyfgafguf.dk/raspbian wheezy-backports/armhf/
Then:

sudo apt-get update
sudo apt-get install forked-daapd
Edit configuration and restart

sudo nano /etc/forked-daapd.conf
sudo service forked-daapd restart
### My Preferred Hardware
1. Flirc case
2. Belkin Ultra Slim Aluminium Series 4-Port USB 2.0 Hub
3. Panda 300Mbps Wireless N USB Adapter
4. Logitech Wireless Touch Keyboard K400
The Flirt case looks nice and keeps the processor running a little cooler as it acts as a heat sink.

This Belkin hub model matches the Flirc’s aluminum casing well and I’ve had good luck powering the Pi from it so another power supply is not necessary. A second power supply for the Pi might be needed.

The Panda wireless adaptor has good range and streams video well.

For controlling a TV media center, a keyboard with built in trackpad is a good option. The Logitech K400 was about the least expensive wireless option I’ve found.

