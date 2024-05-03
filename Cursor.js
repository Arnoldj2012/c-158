AFRAME.registerComponent("cursor-listener", {
    schema: {
      selectedItemId: { default: "", type: "string" },
    },
    init: function () {
      this.handleMouseEnterEvents();
      this.handleMouseLeaveEvents()
    },
  
    handlePosterListState: function () {
      const id = this.el.getAttribute("id");
      const postersId = ["SpiderMan" ,"Hulk","Thor","WonderWoman"];
      if (postersId.includes(id)) {
        const posterContainer = document.querySelector("#posters-container");
        posterContainer.setAttribute("cursor-listener", {
          selectedItemId: id,
        });
        this.el.setAttribute("material", {
          color: "#D76B30",
          opacity: 1,
        });
      }
    },
    handleMouseEnterEvents: function () {
      // Mouse Enter Events
      this.el.addEventListener("mouseenter", () => {
        this.handlePosterListState();
      });
    },
    handleMouseLeaveEvents: function () {
      // Mouse Leave Events
     this.el.addEventListener("mouseleave", ()=>{
      const{selectedItemId}=this.data 
      if (selectedItemId){
        const el=document.querySelector(`#${selectedItemId}`)
        const Id=el.getAttribute("id")
        if (Id==selectedItemId){
          el.setAttribute("material",{color:"#0077cc",opacity:1})
        }
      }
     })
      
    },
  });