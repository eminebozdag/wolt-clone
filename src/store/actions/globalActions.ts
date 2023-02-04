enum GlobalActionType {
  DISPATCH_SHOW_LOGIN_MODAL = "DISPATCH_SHOW_LOGIN_MODAL",
}

const dispatchShowLoginModal = (show: boolean) => ({
  type: GlobalActionType.DISPATCH_SHOW_LOGIN_MODAL,
  show,
});

export { GlobalActionType, dispatchShowLoginModal };
