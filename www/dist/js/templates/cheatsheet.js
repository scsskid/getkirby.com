const e=document.querySelector(".cheatsheet"),t=()=>{document.querySelectorAll(".cheatsheet-panel-header button").forEach(t=>{t.addEventListener("click",()=>{const r=t.getAttribute("data-show");e.setAttribute("data-show",r)})})},r=async r=>{e.classList.add("is-loading");const c=await fetch(r.href+"?plain=true"),o=await c.text();document.querySelector(".cheatsheet-article").innerHTML=o,document.querySelector(".cheatsheet-entries a[aria-current]").removeAttribute("aria-current"),r.setAttribute("aria-current","page"),e.classList.remove("is-loading"),e.removeAttribute("data-show");const a=r.getAttribute("data-title");document.title=a+" | Kirby",t()};window.addEventListener("popstate",e=>{if(e.state&&e.state.slug){const t=document.querySelector("a[data-slug='"+e.state.slug+"']");t&&r(t)}}),document.querySelectorAll(".cheatsheet-entries a").forEach(e=>{e.addEventListener("click",t=>{t.preventDefault(),r(e),history.pushState({link:e.href,slug:e.getAttribute("data-slug")},"",e.href)},!0)}),t();const c=document.querySelector(".cheatsheet-panel-scrollarea"),o=document.querySelector(".cheatsheet-sections a[aria-current]"),a=document.querySelector(".cheatsheet-entries a[aria-current]");function n(){localStorage.setItem("getkirby$reference$scroll",c.scrollTop)}if(c){const e=localStorage.getItem("getkirby$reference$scroll");if(e)c.scroll(0,e),localStorage.removeItem("getkirby$reference$scroll");else if(o&&c.scrollIntoView){const e=o.parentNode.parentNode.parentNode;if(e.scrollIntoView){const t=o.getBoundingClientRect(),r=c.getBoundingClientRect();e.scrollIntoView(t.top<r.top)}}n(),c.addEventListener("click",n)}a&&a.scrollIntoView&&a.scrollIntoView();