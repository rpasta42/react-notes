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


class FaIcon extends React.Component { //<FaIcon name='blah' />
   render() {
      return (
         <i className={' ' + this.props.name}></i>
      );
   }
}

class MenuItemLink extends React.Component { //<MenuItemLink onclick='blah' sideImg=blah label='blah'>
   render() {
      return (
         <li>
            <a href='#' onClick={this.props.onClick}>
               <FaIcon name={ this.props.sideImg } /> { this.props.label }
            </a>
         </li>
      );
   }
}


class FoldingMenu extends React.Component {
   constructor(props) {
      super(props);
      this.id = this.props.id;
      this.sideImg = this.props.sideImg;
      this.label = this.props.label;
      this.subItems = this.props.subItems; //[{'key':'0', 'link':'https://blah', 'label':'blah'}]

      this.kkClassName = ' ';
      this.expanded = false;
   }
   componentDidMount() {
      var e = this.expanded;
      this.expanded = !e;
   }

   handleChange() {
      console.log('bye');
      if (this.kkClassName.length < 1) {
         this.kkClassName = 'collapseWhite collapse';
      }
   }

   render() {
      console.log('hi');

      return (
         <li>
            <a data-toggle='collapse' onClick={()=>(this.handleChange(this.kkClassName)} className={this.kkClassName} href={'#' + this.id} id={'#' + this.id + 'toggle'} aria-expanded={this.exnapded} aria-controls={'#' + this.id} >
               <i className={this.sideImg}> </i>
               <p>
                  {this.label}
                  <b className='caret'></b>
               </p>
            </a>
            <div id={this.id} className='collapseWhite collapse' style={ {height:'5px'} }>
               <ul className='nav'>
                  {this.subItems.map(item => (
                     <li key={item.key}><a href={item.link}>{item.label}</a></li>
                  ))}
               </ul>
            </div>
         </li>
      );
   }
}

class SidePanelNav extends React.Component {
   constructor(props) {
      super(props);
      this.topImgUrl = this.props.topImgUrl;
      this.topMenuImg = <img src={this.topImgUrl} />;


      this.adminId = 'sidebar-admin-dropdown';
      this.adminImg = 'pe-7s-gleam';
      this.adminItems = [
         { 'link':'blah', 'label':'hey'},
         { 'link':'no', 'label':'way'}
      ];

      var i = 0;
      for (var x in this.adminItems) {
         this.adminItems[x]['key'] = i++;
      }
   }

   render() {

      var sidepanelBody = this.getMenuItems();
      return (
         <BPanel body={sidepanelBody} id='kk-sidepanel'>
             {this.topMenuImg}
         </BPanel>
      );
   }

   getMenuItems() {
      this.items = [];
      this.sideImg = 'fa-bar-chart-o fa fa-fw'; //<FaIcon name='fa-dashboard' />;
      var i = 0;
      this.items.push({
         onclick : () => alert('bye'),
         sideImg : this.sideImg,
         label : 'blah',
         key : i++
      });
      this.items.push({
         onclick  : () => alert('hi'),
         sideImg  :'fa-dashboard fa fa-fw',
         label    : 'Dashboard',
         key      : i++
      });

      this.items.push({
         onclick  : () => alert('hi'),
         sideImg  :'pe-7s-config',
         label    : 'ACCOUNT SETTINGS',
         key      : i++
      });

      this.items.push({
         onclick  : () => alert('hi'),
         sideImg  :'pe-7s-info',
         label    : 'HELP',
         key      : i++
      });


      return (
         <div id='mypanel' className='navbar-default sidebar' role='navigation'>
            <div className='sidebar-nav navbar-collapse'>
               <ul className='nav in' id='side-menu'>
                  <li className='sidebar-search'>hi</li>

                  <FoldingMenu id={this.adminId} sideImg={this.adminImg} label='ADMIN' subItems={this.adminItems}>
                  </FoldingMenu>

                  {this.items.map(item => (
                     <MenuItemLink key={item.key} onClick={item.onclick} sideImg={item.sideImg} label={item.label} />
                  ))}

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

