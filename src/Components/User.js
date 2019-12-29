import  React ,{Component} from 'react';
class User extends Component{
    constructor(){
        console.log('User.js constructor');
        super();
      }

      componentWillMount = ()=>{
        console.log('User.js componentWillMount');
      }

      componentDidMount =()=>{
        console.log('user.js componentDidMount')
       }

       componentWillReceiveProps=(a,b)=>{
        console.log('app.js componentWillReceiveProps',a,b);
     }
    render(){
        console.log('User.js render')
              return this.props.userObj.map((user)=>{
                return ( <div  key={user.id}>
                    {user.name} 
                    {user.age}
                    <button onClick={this.props.deleteUser.bind(this,user.id)}>Delete</button>
                    <input onChange={this.props.updateUser.bind(user.id)} type="text" value={this.props.userObj.name}></input>
                    </div>  
                )
               })
    }
    
}

export default User;

