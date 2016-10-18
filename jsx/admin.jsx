class HelloTest extends React.Component {
   render() {
      return (<div id='5x'>Hello</div>);
   }
}

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

class SidePanel extends React.Component {
   /*getMenuItems() {
      var pages = [
         { 'Admin'
      ]
      return
   }*/

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


class FaIcon { //<FaIcon name='blah' />
   render() {
      return (
         <i className='fa fa-fw {this.props.name}'></i>
      );
   }
}

class MenuItemLink { //<MenuItemLink onclick='blah' sideImg=blah label='blah'>
   render() {
      return (
         <li>
            <a href='#' onclick='{this.props.onclick}'>
               { this.props.sideImg }
               <p>{ this.props.label }</p>
            </a>
         </li>
      );
   }
}


class SidePanelNav extends React.Component {
   constructor(props) {
      super(props);
      this.topImgUrl = this.props.topImgUrl;
      this.topMenuImg = <img src={this.topImgUrl} />;
   }

   render() {

      var sidepanelBody = this.getMenuItems();
      return (
         <BPanel body={sidepanelBody} id='kk-sidepanel'>
             {this.topMenuImg}
         </BPanel>);
   }

   getMenuItems() {
      this.items = [];
      var sideImg = <FaIcon name='fa-dashboard' />;
      this.items.push(<MenuItemLink onclick='alert("hi");' sideImg={sideImg} label='blah' />);

      return (
         <div id='mypanel' className='navbar-default sidebar' role='navigation'>
            <div className='sidebar-nav navbar-collapse'>
               <ul className='nav in' id='side-menu'>
                  <li className='sidebar-search'>hi</li>
                  {this.items.map(item => item)}

                  <li>
                     <a href='#'>
                        <i className='fa fa-dashboard fa-fw'></i>
                        Dashboard
                     </a>
                  </li>

                  <li>
                     <a href='#'>
                        <i className='fa fa-bar-chart-o fa-fw'></i>
                        Dashboard
                     </a>
                  </li>

               </ul>
            </div>
         </div>
      );
   }
}

var ex = document.getElementById('example');
var top_img_url = 'assets/logo-bc-white.png';
ReactDOM.render(<SidePanelNav topImgUrl='{top_img_url}'></SidePanelNav>, ex);

{/*var y = <div color='blue'>bye</div>;
ReactDOM.render(y, ex);
ReactDOM.render(<HelloTest name='blah' />, document.getElementById('example')); //body);
//ReactDOM.render( (<BPanel id='hi' body='<h1>hi</h1>'></BPanel>), ex);
//ReactDOM.render(<SidePanel></SidePanel>, ex);
*/}

