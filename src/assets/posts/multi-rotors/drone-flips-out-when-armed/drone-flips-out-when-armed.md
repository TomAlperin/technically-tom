### The Check List ###
Below is a check list for things that should be checked if your multi rotor flips out or does not take off properly when arming. This guide was written to work with BetaFlight 4.4 but may be useful for other versions. Some items have been moved and may be located on different tabs if using an older or newer version of BetaFlight Configurator.

<div class="d-flex justify-content-center">
  <div class="w-600px">
    1. 🔲 Reversed props setting matches how you want to run the props.
    <br>
    2. 🔲 FC orientation. Tilt matches quad animation in BetaFlight.
    <br>
    3. 🔲 Calibrate gyro.
    <br>
    4. 🔲 Check motor positions.
    <br>
    5. 🔲 Check motor directions.
    <br>
    6. 🔲 Props installed to match motor directions and reversed setting.
    <br>
    <br>
  </div>
</div>

The bellow two items only need to be checked if you have enabled compass. As of this writing, BetaFlight does not benefit from having the compass enabled. I recommend disabling the compass as there is no benefit to having it enabled.

<div class="d-flex justify-content-center">
  <div class="w-600px">
    1. 🔲 Compass orientation if installed. Compare BetaFlight compass to real compass.
    <br>
    2. 🔲 Calibrate compass if installed.
    <br>
    <br>
  </div>
</div>

Flipping out on arm is one of the most frequently occurring issues with new multi-rotor build. Checking for all of the above issues will solve the problem in most cases.

**1. Reversed props setting matches how you want to run the props.**
<br>
There are two options available for how the props will spin. Make sure you have selected the correct setting, either props in or props out. The setting is available on the motors tab in BetaFlight Configurator.

<div class="d-flex justify-content-center">
  <div class="w-600px">
    <img class="py-3 w-100" src="assets/posts/multi-rotors/drone-flips-out-when-armed/motor-direction.jpg" alt="Motor Direction Setting">
    <p>
      <em>Use slider to select desired motor rotation. Notice that the image of the quad indicates which way the motors will rotate. Props need to be installed to match the rotation directions.</em>
    </p>
  </div>
</div> 

**2. FC orientation. Tilt matches quad animation in BetaFlight.**
<br>
The setup tab can be used to check that the orientation setting is correct for the gyro chip. This can be configured in BetaFlight Configurator. The image of the multi-rotor on this page will match the actual movements of the multi-rotor when the setting is correct.

<div class="d-flex justify-content-center">
  <div class="w-600px">
    <img class="py-3 w-100" src="assets/posts/multi-rotors/drone-flips-out-when-armed/tilt-settings-check.jpg" alt="Gyro Settings Check">
    <p>
      <em>Check by rotating the drone first. If the rotation is reversed, then you need set 180° flipped. Once this has been fixed, you can set the yaw so that pitch and roll are also correct. Be careful with toothpick style flight controllers. Some mount the gyro at a 45 degree angle and some do not. You an inspect the board to verify this.</em>
    </p>
  </div>
</div> 

<div class="d-flex justify-content-center">
  <div class="w-600px">
    <img class="py-3 w-100" src="assets/posts/multi-rotors/drone-flips-out-when-armed/orientation-settings.jpg" alt="Orientation Settings">
    <p>
      <em>The settings for flight controller orientation are on the BetaFlight Configurator configuration tab.</em>
    </p>
  </div>
</div> 

**3. Calibrate gyro.**
<br>
Once the flight controller orientation is confirmed to be correct, it would be a good time to calibrate the gyro. Although this is not used for flying "Acro Mode", it is used for other flight modes (and not just Angle Mode). It is important to have this set correctly if you are using GPS Rescue mode. This is on the setup tab above the image of the multi-rotor.

**4. Check motor positions.**
<br>
With props not installed go to the motors tab and enable the motors for testing. Check that enabling the motors match the positions numbered on the picture of the multi-rotor. I also use a smoke stopper when doing this as it prevents motors from spinning too fast without props installed. This shouldn't really happen if you don't raise the sliders too much, but I just do it as an extra precaution.

<div class="d-flex justify-content-center">
  <div class="w-600px">
    <img class="py-3 w-100" src="assets/posts/multi-rotors/drone-flips-out-when-armed/motor-testing.jpg" alt="Testing Motor Position and Rotation">
    <p>
      <em>On a quad, motor numbering starts in lower right, to upper right, to lower left, and then to upper left.</em>
    </p>
  </div>
</div> 

**5. Check motor directions.**
<br>
This would be a good time to also check motor directions. They should match the directions indicated on the image of the multi-rotor.

**6. Props installed to match motor directions and reversed setting.**
<br>
Make sure your props are installed correctly. The props should be dished out on the bottom, similar to a wing profile. The rotations need to match the diagram on the motors tab. Make sure you have two left hand and two right hand rotating props.

The last two checks can be skipped if you do not have a compass or if the compass has been disabled. If you have a compass and it is enabled, do the following.

**7. Compass orientation if installed. Compare BetaFlight compass to real compass.**
<br>
The BetaFlight setup tab has an image of a compass. You may need to zoom in the page a little to read it better.

<div class="d-flex justify-content-center">
  <div class="w-600px">
    <img class="py-3 w-100" src="assets/posts/multi-rotors/drone-flips-out-when-armed/compass.jpg" alt="Compass">
    <p>
      <em>On a Mac, I am able to use pinch to zoom to read the compass better.</em>
    </p>
  </div>
</div> 

The rotation and direction of the compass should match a real compass. I use a smart phone compass to get this correct. If the compass orientation is flipped, the compass will move one direction and then back when you rotate the quad. On every compass I have checked, the orientation did not match the markings on the compass. This may be a bug in BetaFlight but as I said before, the compass is support is not great at the time of this writing. Once the compass only rotates the direction that the quad has been moved, you can experiment with the other orientation settings until the direction on the compass matches or is close to a known good compass.

<div class="d-flex justify-content-center">
  <div class="w-600px">
    <img class="py-3 w-100" src="assets/posts/multi-rotors/drone-flips-out-when-armed/mag-alignment.jpg" alt="Mag Alignment">
    <p>
      <em>Select the option that results in the compass facing North when the front of the multi-rotor is facing North.</em>
    </p>
  </div>
</div> 

**8. Calibrate compass if installed.**
<br>
Calibrate the compass from the BetaFlight Configurator setup tab. After clicking to calibrate, you need to flip the quad over 360° on the roll axis and then 360° on the pitch axis. Check the calibration again using the image on the BetaFlight setup tab.