const private_msg_div = document.getElementById("private-msg-div");
const private_msg = document.getElementById("private-msg");

private_msg_div.addEventListener("click", () => {
  if (private_msg.style.display == "none") {
    private_msg.style.display = "block";
    private_msg.style.background = "hsl(211, 68%, 94%)";
  } else {
    private_msg.style.display = "none";
  }
});
