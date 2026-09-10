function getBasePath() {
  return import.meta.env.BASE_URL.replace(/\/$/, "");
}


export function getCurrentPath() {

  const base = getBasePath();
  const pathname = window.location.pathname;


  if (base && pathname.startsWith(base)) {

    const path =
      pathname.slice(base.length) || "/";

    return path.length > 1 && path.endsWith("/")
      ? path.slice(0, -1)
      : path;
  }


  return pathname || "/";
}


export function navigate(path) {

  const base = getBasePath();

  const cleanPath =
    path.startsWith("/")
      ? path
      : `/${path}`;


  const target =
    base +
    (cleanPath === "/" ? "/" : cleanPath);


  window.history.pushState(
    {},
    "",
    target
  );


  window.dispatchEvent(
    new PopStateEvent("popstate")
  );
}