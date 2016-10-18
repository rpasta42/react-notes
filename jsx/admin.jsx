
function animate(el, name, duration) {
   el.css('animation-name', name);
   el.css('animation-duration', duration + 's');
   el.css('animation-fill-mode', 'forwards');
}

class BPanel extends React.Component {
   render() {
      return (
         <div id={ this.props.id } className="panel panel-default">
            <div className="panel-body">
               { this.props.body }
            </div>
         </div>);
   }
}

class MenuItemLink {
   render() {
      return (
         <div>

      );
   }
}

class SidePanel extends React.Component {
   getMenuItems() {
      var pages = [
         { 'Admin'
      ]
      return
   }

   constructor(props) {
      super(props);
      this.topImgUrl = 'assets/logo-bc-white.png';
   }

   render() {
      var pageimg = <img src={this.topImgUrl }/>;

      var sidepanelBody = getMenuItems();

      return (<BPanel body={sidepanelBody} id='sidepanel'></BPanel>);
   }
}


class HelloTest extends React.Component {
   render() {
      return (<div id='5x'>Hello</div>);
   }
}


var y = <div color='blue'>bye</div>;

var ex = document.getElementById('example');
ReactDOM.render(y, ex);

ReactDOM.render(<HelloTest name='blah' />, document.getElementById('example')); //body);


//ReactDOM.render( (<BPanel id='hi' body='<h1>hi</h1>'></BPanel>), ex);
ReactDOM.render(<SidePanel></SidePanel>, ex);
