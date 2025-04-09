<script>
  import { postLogin } from "./utils/postLogins.js";
  import logo from "../../lib/Images/dma.png";
  import user from "../../stores/user.js";
  import { login } from "../../stores/login.js";
  import { goto } from "$app/navigation";

  let emailAddress = "";
  let password = "";
  let postError = "";
  let error = "";
  let data = "";

  const LOGIN_DELAY = 2000;

  $: $user ? login.set(true) : login.set(false);
  $: if ($login) goto("/");
</script>