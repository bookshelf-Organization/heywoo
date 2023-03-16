document.querySelector(".topbtn").addEventListener("click", (e) => {
    e.preventDefault();
     window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
});



function selectAll(selectAll)  {
  const checkboxes 
     = document.querySelectorAll('input[type="checkbox"]');
  
  checkboxes.forEach((checkbox) => {
    checkbox.checked = selectAll.checked
  })
}

