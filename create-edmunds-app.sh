#!/usr/bin/env sh

main() {
  # Use colors, but only if connected to a terminal, and that terminal
  # supports them.
  if which tput >/dev/null 2>&1; then
      ncolors=$(tput colors)
  fi
  if [ -t 1 ] && [ -n "$ncolors" ] && [ "$ncolors" -ge 8 ]; then
    RED="$(tput setaf 1)"
    GREEN="$(tput setaf 2)"
    YELLOW="$(tput setaf 3)"
    BLUE="$(tput setaf 4)"
    BOLD="$(tput bold)"
    NORMAL="$(tput sgr0)"
  else
    RED=""
    GREEN=""
    YELLOW=""
    BLUE=""
    BOLD=""
    NORMAL=""
  fi

  # Only enable exit-on-error after the non-critical colorization stuff,
  # which may fail on systems lacking tput or terminfo
  set -e

  if ! command -v curl >/dev/null 2>&1; then
    printf "${YELLOW}Curl is not installed!${NORMAL} Please install curl first!\n"
    exit 1
  fi
  if ! command -v tar >/dev/null 2>&1; then
    printf "${YELLOW}Tar is not installed!${NORMAL} Please install tar first!\n"
    exit 1
  fi

  printf "${YELLOW}What will be the name of the app?${NORMAL}\n"
  read APP_NAME
  if [ -z "${APP_NAME}" ]; then
    printf "${RED}No valid app-name given!${NORMAL}\n"
    exit 1
  fi
  APP_DIR_NAME="edmunds-app-${APP_NAME}"
  APP_FILE_NAME="edmunds-app-${APP_NAME}.tar.gz"

  if [ -e "${APP_NAME}" ]; then
    printf "${RED}${APP_NAME} already exists in the current directory!${NORMAL}\n"
    exit 1
  fi

  REPO="edmunds"
  BRANCH="master"

  printf "\n"
  printf "${BLUE}Downloading clean instance of Edmunds...${NORMAL}\n"
  curl -s -L "https://github.com/edmundsjs/${REPO}/archive/${BRANCH}.tar.gz" --output "${APP_FILE_NAME}"

  printf "${BLUE}Instantiating clean instance of Edmunds...${NORMAL}\n"
  mkdir "${APP_DIR_NAME}"
  tar -C "${APP_DIR_NAME}" -xzf "${APP_FILE_NAME}"
  mv "${APP_DIR_NAME}/${REPO}-${BRANCH}" "${APP_NAME}"
  rm -r "${APP_DIR_NAME}"
  rm "${APP_FILE_NAME}"
  if [ -f "${APP_NAME}/create-edmunds-app.sh" ]; then
    rm "${APP_NAME}/create-edmunds-app.sh"
  fi

  printf "\n"
  printf "${BLUE}Your new app '${APP_NAME}' is ready to rumble!${NORMAL}\n"
  printf "${BLUE}Get started with:${NORMAL}\n"
  printf "$>  cd ${APP_NAME} && npm install && npm start\n"
}

main
