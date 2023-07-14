### EdgeTX / OpenTX Logical (Sticky Switch) Pre Arm ###
For my first article about multi rotors I would like to address an issue with a reccomended pre-arm set up that I think is unsafe. BetaFlight has safety checks to prevent accidental disarm however some are not convient to use. There is an angle limit but this prevents turtle mode from ever working unless it is disabled. Some pilots choose to add a pre-arm switch to add some safety lost when disabling the angle limit however not all methods for adding pre-arm are the same and at least one currently has some seriious issues. If you are using EdgeTX or OpenTX, you can add logical switches for the pre-arm using a "sticky" switch. The issue is that there is a race condition with how activation and deactivation occurs. If you arm and disarm quickly, the sticky logical switch can remain on leaving the multi-rotor armed. Flipping the switch back to arm and disarming again will disarm, however most pilots are not even aware that this can happen.

<div class="d-flex justify-content-center">
  <div class="w-600px">
    <img class="py-3 w-100" src="assets/posts/multi-rotors/why-using-a-logical-switch-for-prearm-is-unsafe/sticky-normal-operation.jpg" alt="BetaFlight Modes">
    <p>
      <em>This image shows normal operation of the sticky switch. Logical switch L3 is on to show that the arm switch is in the correct position for the armed state.</em>
    </p>
  </div>
</div> 

<div class="d-flex justify-content-center">
  <div class="w-600px">
    <img class="py-3 mw-100" width="100%"" src="assets/posts/multi-rotors/why-using-a-logical-switch-for-prearm-is-unsafe/sticky-error-condition.jpg" alt="BetaFlight Modes">
    <p>
      <em>This image shows that the arm switch is not in the correct position for the armed state however the sticky switch is on. This can happen if the switch is toggled on and off too quickly. While it might seem not likely to happen, a situation where a pilot decides quickly not to arm can happen. A fly-away condition is an example why a pilot might choose to disarm quickly.</em>
    </p>
  </div>
</div> 

### BetaFlight Pre-Arm ###
A better option for handling pre-arm is to use the built in BetaFlight pre-arm mode. This can be found on the modes tab along with the arm mode and other flight modes. Not only does the BetaFlight pre-arm not have this race condition issue, it only allows arming once for each pre-arm switch activation in cases where not using a momentary switch, requires pre-arm be held down until props actually begin spinning if using motor beeper along with pre-arm, and requires pre-arm to be held down until mid throttle when using 3D mode. The extra requirements make it more difficult to accidentally arm.

### Beeper On Arm ###
Another setting I like to use to increase safty is to set the pre-arm channel to activate the beeper. I let anyone watching the flighs know that the beeping sound indicates that I am about to arm and that it's not safe to be near the craft. This can be set using a range but I have been using pre-arm as a trigger for the beeper. This can be seen in the following image.

<div class="d-flex justify-content-center">
  <img class="py-3 mw-100" width="900px"" src="assets/posts/multi-rotors/why-using-a-logical-switch-for-prearm-is-unsafe/betaflight-modes.jpg" alt="BetaFlight Modes">
</div> 

Using beeper on arm provides a good example of how BetaFlight pre-arm is able to function more reliably only allowing the motors to begin spinning if the arm switch is held down at the exact moment the propes would begin spinning. Although this does use an additional aux channel, it is possible to combine multiple modes onto a single channel to overcome channel limitations.
