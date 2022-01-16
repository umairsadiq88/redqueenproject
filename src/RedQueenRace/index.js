import React, { useLayoutEffect, useRef } from "react";
import "./style.css";

export const RedQueenRace = () => {
	const background1Ref = useRef(null);
	const background2Ref = useRef(null);
	const foreground1Ref = useRef(null);
	const foreground2Ref = useRef(null);
	const redQueen_and_alice_sprite = useRef(null);

	useLayoutEffect(() => {
		var sceneryTransformation = [
			{ transform: "translateX(100%)" },
			{ transform: "translateX(-100%)" }
		];

		var backgroundTiming = {
			duration: 36000,
			iteration: Infinity
			// playbackRate: -2
		};

		var foregroundTiming = {
			duration: 12000,
			iteration: Infinity
			// playbackRate: -2
		};

		var background1Movement = background1Ref.current.animate(
			sceneryTransformation,
			backgroundTiming
		);
		background1Movement.currentTime =
			background1Movement.effect.getTiming().duration / 2;

		var background2Movement = background2Ref.current.animate(
			sceneryTransformation,
			backgroundTiming
		);

		var foreground1Movement = foreground1Ref.current.animate(
			sceneryTransformation,
			foregroundTiming
		);
		foreground1Movement.currentTime =
			foreground1Movement.effect.getTiming().duration / 2;

		var foreground2Movement = foreground2Ref.current.animate(
			sceneryTransformation,
			foregroundTiming
		);

		var spriteFrames = [
			{ transform: "translateY(0)" },
			{ transform: "translateY(-100%)" }
		];

		var redQueen_alice = redQueen_and_alice_sprite.current.animate(
			spriteFrames,
			{
				easing: "steps(7, end)",
				direction: "reverse",
				duration: 600,
				playbackRate: 1,
				iterations: Infinity
			}
		);

		var scenery = [
			background1Movement,
			background2Movement,
			foreground1Movement,
			foreground2Movement
		];

		var adjustBackgroundPlayback = function () {
			if (redQueen_alice.playbackRate < 0.8) {
				scenery.forEach(function (anim) {
					anim.playbackRate = (redQueen_alice.playbackRate / 2) * -1;
				});
			} else if (redQueen_alice.playbackRate > 1.2) {
				scenery.forEach(function (anim) {
					anim.playbackRate = redQueen_alice.playbackRate / 2;
				});
			} else {
				scenery.forEach(function (anim) {
					anim.playbackRate = 0;
				});
			}
		};
		adjustBackgroundPlayback();

		setInterval(function () {
			/* Set decay */
			if (redQueen_alice.playbackRate > 0.4) {
				redQueen_alice.playbackRate *= 0.9;
			}
			adjustBackgroundPlayback();
		}, 3000);

		var goFaster = function () {
			/* But you can speed them up by giving the screen a click or a tap. */
			redQueen_alice.playbackRate *= 1.1;
			adjustBackgroundPlayback();
		};

		document.addEventListener("click", goFaster);
		document.addEventListener("touchstart", goFaster);
	}, []);

	return (
		<div className="wrapper">
			<div className="sky"></div>
			<div className="earth">
				<div id="red-queen_and_alice">
					<img
						ref={redQueen_and_alice_sprite}
						id="red-queen_and_alice_sprite"
						src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png"
						// srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 2x"
						alt="Alice and the Red Queen running to stay in place."
					/>
				</div>
			</div>

			<div ref={foreground1Ref} className="scenery" id="foreground1">
				<img
					id="palm3"
					src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png"
					// srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x"
					alt=" "
				/>
			</div>
			<div ref={foreground2Ref} className="scenery" id="foreground2">
				<img
					id="bush"
					src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png"
					// srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x"
					alt=" "
				/>
				<img
					id="w_rook_upright"
					src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png"
					// srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright.png 2x"
					alt=" "
				/>
			</div>

			<div ref={background1Ref} className="scenery" id="background1">
				<img
					id="r_pawn_upright"
					src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png"
					// srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright.png 2x"
					alt=" "
				/>
				<img
					id="w_rook"
					src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png"
					// srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook.png 2x"
					alt=" "
				/>
				<img
					id="palm1"
					src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png"
					// srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1.png 2x"
					alt=" "
				/>
			</div>

			<div ref={background2Ref} className="scenery" id="background2">
				<img
					id="r_pawn"
					src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png"
					// srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn.png 2x"
					alt=" "
				/>
				<img
					id="r_knight"
					src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png"
					// srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight.png 2x"
					alt=" "
				/>
				<img
					id="palm2"
					src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png"
					// srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2.png 2x"
					alt=" "
				/>
			</div>
		</div>
	);
}
