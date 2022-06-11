with import <nixpkgs> {};

stdenv.mkDerivation {

  name = "authkit-ui";

  buildInputs = with pkgs; [
    go_1_17
    nodejs-16_x
    yarn
    python
    dotnet-sdk
  ];

}

