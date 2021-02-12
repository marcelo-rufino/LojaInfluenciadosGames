import React from 'react';
import axios from 'axios';


class ProdutosLoja extends React.Component{

    constructor(){ 
        super();

        this.state={

            dados:[],
            categoria:"", /* o estado da minha categoria da zerado, ou seja esta como dse eu clicasse no button value "todos"*/
        } 
      this.Categoria = this.Categoria.bind(this); /* bind pra informar meu stats na minha class construtor*/
    }
       
 
  Categoria(e) { 
      this.setState({ categoria:""})
      this.setState({categoria:e.target.value })        
  };
        /*Didmount pois meu componente e uma class nao funcao*/    
    componentDidMount(){                    
        axios.get('http://localhost:4000/api/produtos' )/*usei o axios para pushar do banco de dados meu produtos em objeto json*/
        .then( (resposta) => { 
              this.setState({dados:resposta.data} )
         })  
    }

render(){
return(
<div className="container" >
<br></br>
            <h2>Categorias</h2>
{/*minha lista de produtos*/}
<div className="navbar">
<div className="row">

                <button  type="button" className="btn btn-outline-primary" value=""  onClick={this.Categoria}>Todos
                </button>

                <button  type="button" className="btn btn-outline-primary" value='fogao' onClick={this.Categoria}>Videogames
                </button>

                <button  type="button" className="btn btn-outline-primary" value='geladeira' onClick={this.Categoria}> Jogos
                </button>

                <button  type="button" className="btn btn-outline-primary" value='liquidificador' onClick={this.Categoria}>Monitor
                </button>

                <button  type="button" className="btn btn-outline-primary"  value='maquina de lavar'  onClick={this.Categoria}> Controles
                </button>

                <button  type="button" className="btn btn-outline-primary" value='cafeteira' onClick={this.Categoria}> Headset
                </button> 
                
                </div>
                <div className="">
                <button  type="button" className="btn btn-outline-primary" value='torradeira'  onClick={this.Categoria}> Mouse
                </button>
            
                </div>
</div> 
<br/><br/><br></br>          
    <br/>
    {/* aqui eu inicio a parte que meus produtos ficam a avista*/ }
    <nav className="navbar justify-content-center">
    <div className="container-fluid" >
{this.state.dados.map((item)=>{  
            /*fiz um iF else para fazer a logica de ao clilcar no buttao eu ter meu produto de acordo com o botao selecionado*/
                    if( this.state.categoria === item.categoria  ){

                        return(
<div  className="itens1 col col-md-4 text-center">
                                <img id="img_produtos"   src={item.img} />
                                <p className="text-secondary" onClick={this.Categoria} id="text1">   {item.descricao } <br/> Automático Inox </p>
                                <hr/>
                                <p className="text-danger" id="valor1"> <s> de R${ item.preco_inicial} por </s> </p>
                                <p className="text-success" id="valor2"> R$ { item.preco_final } </p>
                            </div>
)                                            
                    }else if( this.state.categoria === "" ){
                        return(
                            <div  className="itens1 col col-md-4 text-center">
                                <img id="img_produtos"   src={item.img} />
                                <p className="text-secondary" onClick={this.Categoria} id="text1">   {item.descricao } <br/> Automático Inox </p>
                                <hr/>
                                <p className="text-danger" id="valor1"> <s> de R${ item.preco_inicial} por </s> </p>
                                <p className="text-success" id="valor2"> R$ { item.preco_final } </p>
                            </div>
)
                    }          
            })
            }
    </div>
    </nav>
    
</div>

)  
};
};

export default ProdutosLoja;
