export default function ({ $axios }, inject) {
  const api = $axios.create({
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("idToken")}`,
    }
  });

  inject('api', api);
}
