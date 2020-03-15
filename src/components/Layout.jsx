import * as React from 'react';
import { Container } from 'reactstrap';
import Sidebar from './Sidebar';
import './sidebar.css'; 
import './cards.css';;
export default class Layout extends React.Component {
    constructor(props){
        super(props);
        this.state= { isOpen: false};
        this.toggle = this.toggle.bind(this);
    }
    toggle(){
        this.setState({
            isOpen: !this.state.isOpen
        });
    } 
    componentDidMount(){
        if(window.innerWidth < 768){
            this.setState({
                isOpen: true
            })
        }
        
    }

    render(){
        const {props, toggle} = this;
        return (
            <div className={`wrapper ${this.state.isOpen ? "collapsed": "" }`}>
                <Sidebar toggle={toggle}/>
                <Container fluid={true}>
                    {props.children}
                </Container>
            </div> 
        ) 
    }
}
 

