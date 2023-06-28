rpi-usb
Moving an install from SD card to USB device using the dd utility can have some major annoyances. It can’t be done on a running system and the destination drive needs to be larger than the source, even if the source is empty. The entire drive, including empty space is copied with dd and this can end up taking longer than a file copy.

```shell
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install rsync
sudo apt-get install gparted
```

This guide assumes you already have a working SD card install of Raspbian that you wish to move to USB. Use Gparted to delete the partition on your destination USB drive and create a new partition of type ext4. This will delete all content on this USB so be careful to back up if needed. First unmount the partition, delete the partition, then create the new partition. Make sure the partition uses as much disk space as you want and that it is ext4.

<div class="d-flex justify-content-center">
  <img class="py-3 mw-100" width=700px" src="assets/posts/technicalities/using-grsync-for-usb-install-on-raspberry-pi/gparted.png" alt="Gparted">
</div>

Use Grsync to clone the root partition. Make sure to select the proper destination. Your destination drive field should contain something like “/media/yourdrive”. Notice that there is no “/” at the end. If you get this wrong, your files end up nested in a folder and have to be manually moved to the right location. The source field will be “/” if you are copying the running root. The advantage to this method is that it can be performed on a running system. It’s probably best to not use the system while cloning but you can run a second Grsync after the initial run to make sure files that were changed during the first run are copied. The second run will be quicker as it’s only copying files that have been changed.

Before you start the copy process make sure all the options are set appropriately. You should also run a simulation to see if files are being copied correctly.

<div class="d-flex justify-content-center">
  <img class="py-3 mw-100" width="700px" src="assets/posts/technicalities/using-grsync-for-usb-install-on-raspberry-pi/grsync-1.png" alt="Grsync 1">
</div> 


Permissions need to be set on the copied files. “Do not leave file system” is important to prevent your other drives from being cloned as well.

<div class="d-flex justify-content-center">
  <img class="py-3 mw-100" width="700px" src="assets/posts/technicalities/using-grsync-for-usb-install-on-raspberry-pi/grsync-2.png" alt="Grsync 2">
</div> 

Copy links as links.

<div class="d-flex justify-content-center">
  <img class="py-3 mw-100" width="700px"" src="assets/posts/technicalities/using-grsync-for-usb-install-on-raspberry-pi/grsync-3.png" alt="Grsync 3">
</div> 


If you don’t run as root, you will not be able to copy the entire system.

You can create profiles for future backups of the root and boot partitions to an additional USB device. I usually back up the root to the first partition on my backup usb and then the boot (reversed from what they are on a running SD card. If I need to boot from this disk root will still be on sda1 and I can eventually delete the boot and expand the root to use all available space. If the partitions are arranged with boot first, it will take much longer to delete the boot and expand the root. Moving partitions takes much longer than expanding the end of the partition to use more space.

Once the clone process has completed, you can set the drive as your new root file system.

Edit the /boot/cmdline.txt file so

```shell
root=/dev/sda1
```

you may need to add “rootdelay=5” if using a mechanical HD instead of a flash drive to allow for spin up. You can also increase the delay up from 5 if needed.

Edit the /etc/fstab file ON THE NEW ROOT PARTITION so the line…

```shell
/dev/mmcblk0p2  /               ext4    defaults,noatime  0       1
```
Reads as…
```shell
/dev/sda1  /               ext4    defaults,noatime  0       1
```
The new root fstab location will be something like:\
“/media/newroot/ext/fstab”

If this all works, you can use the UUID to locate the boot drive instead. This is useful if you have more than one USB drive and want to guarantee the root drive is always correctly recognized.
```shell
sudo -i
cd /boot
mkinitramfs -o initrd.sda
nano config.txt # and add
```
```shell
initramfs initrd.sda
```
Find your UUID by entering in the terminal…
```shell
blkid
```
You should have a list of all the partitions. Find the correct one and be sure to remove the quotes if you use copy/paste to move it to the two files that it needs to be in.
```shell
/dev/sda1: LABEL="root" UUID="12345678-abcd-defg-1234-12345678abcd" TYPE="ext4"
```
Edit the /boot/cmdline.txt file to read…
```shell
root=UUID=your-drives-unique-id
```
Edit /etc/fstab file so the root partition line reads…
```shell
UUID=your-drives-unique-id   /     ext4    defaults,noatime      0 1
```
Reboot so the changes will be recognized. 