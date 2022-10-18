const { createApp } = Vue  //creo un objeto VUE llamdo createApp

createApp({
  data() {
    return {
      url: 'https://api.sampleapis.com/recipes/recipes',
      recipesAll: [],
      recipes: [], // array para mostrar                                                                    /*cuisines:[],       cursos: [],       calories: 1000,       cuisine: "All",      curso: "All"       */
      calories:400
    }
  },
  methods: {
     async fetchData(url) {  // necesite un async y await porque seguia de largo y no me cargaba el array recipes ni las listas desplegables
      resp = await fetch(url)
      this.recipesAll = await resp.json()
      this.recipes = this.recipesAll
    },
    
    filtro() {
      this.recipes = this.recipesAll.filter( elemento=>(elemento.calories <= this.calories && elemento.calories!="") )    
     
    },
   
   
  },
  created() {
  this.fetchData(this.url)                                                       //   
  
  }
}).mount('#app')




