export const showBanner = () => {
	const icon = `

      /@@@@@@@@@@@@@@@@@@╗        @@@@@@@@@@@@@@@@@@\\
    /@@@@@@@@@@@@@@@@@@@@║        @@@@@@@@@@@@@@@@@@@@\\
   @@@@@@╔═══════════════╝                         @@@@@@
  @@@@@/═╝                                         \\@@@@@@
(@@@@@            @@@@@@@@@@@@@@@@@@@@@@@@╗          @@@@@)
(@@@@@            @@@@@@@@@@@@@@@@@@@@@@@@║          @@@@@)
 @@@@@\\                ═══════════════════╝         /@@@@@║
  @@@@@@@                                          @@@@@@╔╝
   \\@@@@@@@@@@@@@@@@@@@@@╗          @@@@@@@@@@@@@@@@@@@@/║
      *@@@@@@@@@@@@@@@@@@║          @@@@@@@@@@@@@@@@@*╔══╝
	     ╚═══════════════╝           ╚════════════════╝

Connect Devtools Reference: https://connect-org.github.io/devtools
`;

	console.log(
		`%c${icon}`,
		`color:${
			window.matchMedia("(prefers-color-scheme:dark)") ? "white" : "black"
		}`
	);
};
