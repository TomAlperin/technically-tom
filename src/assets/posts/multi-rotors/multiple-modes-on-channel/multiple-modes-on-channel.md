### All Modes on One Channel ###
When I first got into flying and building racing drones, it wasn't long before I discovered a video by Joshua Bardwell on how to put "all modes on one channel" when using OpenTX combined with BetaFlight. I was a bit nervous at the time about doing this with arming so modified things so arming was on it's own channel. This worked well for me for a long time until I decided to add even more modes. In the video Joshua Bardwell is quite excited about the possibilities but he's at the limit. Not only is there not much room in the range to add something else but he has just about ran out of available modes. BetaFlight has a limit of about 24 or 25 modes. Once you hit the limit, saving will skip modes it does not have space for. It does this in a bit of a user unfriendly way by not letting you know this is going to happen. One of the great things about good ideas like the "All Modes on One Channel" is that there is sometimes ways to improve and customize how it's used to better suit your own needs. I have used the basic concept of the tutorial and have developed what I think is an improved method which allows me to use more modes without hitting the BetaFlight limit. The following configuration was done on EdgeTX but should work equally well on OpenTX.

### Naming Your Switches (Extra Bonus) ###
A good place to start with setting this up is with naming the switches. This is not necessary, however it can make it easier to keep track of what each mode is doing if it has a name that relates to what you are going to use the switch for. Switch names are limited to 3 characters. They can be found on th EdgeTX hardware page.

<div class="d-flex justify-content-center">
  <div class="w-500px">
    <img class="py-3 w-100" src="assets/posts/multi-rotors/multiple-modes-on-channel/edgetx-hardware.jpg" alt="BetaFlight Modes">
  </div>
</div> 

<div class="d-flex justify-content-center">
  <div class="w-500px">
    <img class="py-3 w-100" src="assets/posts/multi-rotors/multiple-modes-on-channel/edgetx-switches.jpg" alt="BetaFlight Modes">
  </div>
</div> 

### EdgeTX Mixer Settings ###
If you look at the configuration below, the first thing you will notice is that they are grouped into arming related and flight mode related. Instead of modes adding to the initial value they replace the value with the exception of the last switch on each channel. We are going to need to create multiple ranges in BetaFlight on some channels but usually not more than 2 on any mode. I have 4 ranges for air mode but all others are only 2. It is important to put modes that override other modes below those modes in the list and the mode that adds to the value needs to be at the bottom of the list. Turtle mode is going to override angle and acro modes in this example. This configuration is for TBS Crossfire. If you are using ExpressLRS, changes will need to be made. Most of this configuration will work if you use wide channels but arming needs to be on in own aux channel (5) and you may need to test the switch positions to make sure they actually move for each switch position.

Another variation from Bardwell's method is that I have initialized the channel starting value to be 1000 (low) for the modes channel and 1500 (mid) for the arming channel. The arming channel is set to start at mid because I wanted to make sure The VTX Pit switch would be off when plugging in even if there was no connection to the receiver. This provides room for turning on other modes by lowering the value below the arm failsafe value. Arming moves the value 2000. Enabling other modes lowers the value but not lower than the value needed to stay armed.

<div class="d-flex justify-content-center">
  <div class="w-500px">
    <img class="py-3 w-100" src="assets/posts/multi-rotors/multiple-modes-on-channel/edgetx-mixer.jpg" alt="BetaFlight Modes">
    <p>
      <em>The mixer page groups modes into arming related and flight mode related. This is done because it requires fewer modes to be assigned since some modes cancel each other out. Turtle mode will override other flight modes, for example. You don't need to have turtle with angle and turtle with acro.</em>
    </p>
  </div>
</div> 

In BetaFlight you will need to configure the modes for each switch position. While you will need to set two ranges on some items, pay close attention to which mode you are working with. I have made sure that the VTX will be turned on if armed or even if pre-arm is held down. Not only does this require fewer ranges for the mode but it makes it impossible to accidentally turn off the camera while armed. If you use a variation of this, you may find you have modes that don't make sense with with an an item you have chosen to combine it with. You would never need to use return to home if disarmed, for example.

I have also used links to reduce the number of ranges required. Air mode has 4 ranges for example but I need to add only one link to activate the "Ready" mode when air mode is active. I am currently using this setting to let me know that I have air mode on before takeoff. This mode was created for race situations to allow pilots to let race officials know that they are ready but I have repurposed it here.

<div class="d-flex justify-content-center">
  <div class="w-900px">
    <img class="py-3 w-100" src="assets/posts/multi-rotors/multiple-modes-on-channel/betaflight-modes.jpg" alt="BetaFlight Modes">
    <p>
      <em>BetaFlight modes have been configured similar to the all modes on one channel but no more than one mode is set that requires creating multiple ranges. Most modes are grouped to channels based on whether they do not need to be enable or disabled with other modes. Acro Trainer Mode, Angle Mode, and Turtle Mode do not combine with each other.</em>
    </p>
  </div>
</div> 

### Other Notable Details ###
I couldn't fit absolutely everything I wanted using only 4 aux channels with Crossfire. The extra though were things that were only on a few drones. Most of my "fleet" is set to only use 8 channels. If I have LEDs, then I set to use 12. I have also added a mode for testing failsafe in this range. This allows for testing that can be disabled later.

This still feels like a work in progress to me though I do have room to add more modes if I want. For example, I have been considering repurposing a trim switch to activate calibrating the accelerometer. If I added this, it would not need to work with the beeper so could it would only require one additional range. Although this configuration allows me to set just about everything I would ever want to set from the transmitter, I can't help but think what might be a better way this could be done if both EdgeTX and BetaFlight were updated to allow setting modes based on the value of "bits" in the data being sent for each channel. The data being sent is digital but is then displayed to the user in an analog interface which is then used to switch on a mode that is basically just a switch flip. If it was possible to configure on both ends so bits represented individual switches it would be much easier to configure multiple modes on a single channel and it would never require using multiple lines to handle all situations. A channel with 10 bits would be able to work as 10 switches which could be assigned to modes. For this to work, EdgeTX would need to be configurable so activating a switch only changed one bit of the channel value. BetaFlight would also need an option for adding something to a mode that was not a range or link. It would need to allows selecting the channel and the bit that should trigger the mode. Because this would need to be coordinated between EdgeTX, OpenTX, and BetaFlight, I would not expect this to happen any time soon.

If you have purchased a full sized radio, you most likely have more switches than you can think of uses for. Even a nice game pad controller or inexpensive controller is likely to come with more switches than you could use if limited to simply assigning each switch to a channel. For most beginners this is more than enough but as you develop into a more advanced pilot, you might as well make use of all the switches and dials you paid for.