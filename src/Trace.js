import React, {Component} from 'react';
import './App.css';
import axios from "axios"
// import "bootstrap/dist/css/bootstrap.min.css";
// import "shards-ui/dist/css/shards.min.css"

class Trace extends Component {
	constructor(props){
		super(props)
		this.state = {
			loaded: false,
			result: {},
			invalid: false
		}
	}
	componentDidMount(){

		function ascii_to_hexa(str)
		{
		  var arr1 = [];
		  for (var n = 0, l = str.length; n < l; n ++) 
		   {
			  var hex = Number(str.charCodeAt(n)).toString(16);
			  arr1.push(hex);
		   }
		  return arr1.join('');
		 }

		const temp = (this.props.match.params.encoded)
		try {
			window.atob(temp)
			let sumn = atob(temp)
			sumn = sumn.toUpperCase()
			const string = sumn[0]+sumn[1]
			console.log(string)
			const result = string.match(/SF/g)
			if(!result)
			{
				this.setState({invalid: true})
			}
			else{
			//continue normal execution
				console.log('valid hai bhai')




				let string = 'v'+(atob(temp))
		const encodedURL = ascii_to_hexa(string)

		const abc = async () => {
			try {
				const response = await axios.get('https://qriosity.agrotrust.io/api/trace/sahyadri', {
					params: {
					  id: encodedURL
					}
				  })
				this.setState({
					result: response.data,
					loaded: true
				})
			} catch (error) {
				console.log(error)
			}
		}
		
		abc()
			}
		} catch (error) {
			this.setState({invalid: true})
		}

		
	}
	render(){
		const loadCheck = () => {
			if(this.state.loaded){
				let abc
				if(this.state.result.farmer.demographics)
				{
					if(this.state.result.farmer.demographics.picture)
					{
						abc = this.state.result.farmer.demographics.picture
					}
					else{
						abc = "/images/farmer.svg"
					}
				}
				// const abc = (this.state.result.farmer.demographics.picture)? this.state.result.farmer.demographics.picture : "/images/farmer.svg"
				else{
					abc = "/images/farmer.svg"
				}

				return(
					<div className="col-lg-10 main-content-container container-fluid px-4">
					{/* Page Header */}
					<div className="page-header row no-gutters py-0">
					  <div className="text-center my-auto">
						<h3
						  className="page-title"
						  style={{ fontFamily: '"Ruda", sans-serif' }}
						>
						  {/* QRIOSITY */}
						  <span style={{ color: "black" }}>QR</span>
						  <span style={{ color: "#31859C" }}>IOSITY</span>
						</h3>
						<span className="text-uppercase" style={{ fontSize: 9 }}>
						  Powered by{" "}
						  <span style={{ fontFamily: '"Ruda", sans-serif' }}>
							{/* QRIOSITY */}
							<span style={{ color: "black" }}>AGRO</span>
							<span style={{ color: "#31859C" }}>TRUST</span>
						  </span>
						</span>
					  </div>
					  <div className="col-1.5" style={{ marginLeft: "auto" }}>
						<div
						  className="blog-comments__item d-flex p-3"
						  style={{ margin: "0 auto" }}
						>
						  <div className="blog-comments__avatar">
							<a href="http://www.sahyadrifarms.com">
							<img
							  style={{
								width: "6.125rem",
								height: "6.125rem"
							  }}
							  src="/images/sahyadri_logo.png"
							  alt="User avatar"
							/>
							</a>
						  </div>
						  <div className="blog-comments__content"></div>
						</div>
					  </div>
					</div>
					{/* End Page Header */}
					{/* Small Stats Blocks */}
					<div className="row">
					  <div className="col-lg mb-4">
						<div className="card card-small">
						  <div className="card-header border-bottom">
							<h6 className="m-0">
							  {/* Cauliflower-Cauliflower-Piece - 1 Kg to 1.5 Kg (1.25 Kgs) */}
							  {this.state.result.plot.crop.name} - {this.state.result.plot.variety.name}

							</h6>
						  </div>
						  <div className="card-body p-0">
							<ul className="list-group list-group-small list-group-flush">
							  <li className="list-group-item d-flex px-3">
								<span className="text-semibold text-fiord-blue  text-reagent-gray">
								  Warehouse name
								</span>
								<span className="ml-auto text-right text-semibold">
								  Holding Area - F&amp;V (Holding Area)
								</span>
							  </li>
							  <li className="list-group-item d-flex px-3">
								<span className="text-semibold text-fiord-blue text-reagent-gray">
								  Warehouse address
								</span>
								<span className="ml-auto text-right text-semibold">
								  Mohadi, Dindori, Nashik, Maharashtra, India, Asia, 422206,
								  Nashik, Maharashtra, India, Asia
								</span>
							  </li>
							</ul>
						  </div>
						  <div className="card-footer border-top" />
						</div>
					  </div>
					</div>
					{/* End Small Stats Blocks */}
					<div className="row">
					  {/* Users Stats */}
					  {/* End Users Stats */}
					  {/* Users By Device Stats */}
					  <div
						className="col-lg-6 col-md-6 col-sm-8 mb-4"
						style={{ margin: "0 auto" }}
					  >
						<div className="card card-small">
						  <div
							className="card-body d-flex py-0"
							style={{ overflow: "auto" }}
						  >
							<div className="blog-comments__item d-flex p-3">
							  <div className="blog-comments__avatar mr-3">
								<img
								// src="https://media.kisanhub.in/media/uploads/users/7588195086/profile/df696dfa-64c8-11e8-aad3-42010a64100c.pic_a520a9c5-935c-4ef7-b470-3c530e044641"
								// src={this.state.img}
							  	src = {abc}
								alt="User avatar"
								  style={{ width: "10.125rem", height: "11.125rem" }}
								/>{" "}
							  </div>
							  <div
								className="blog-comments__content"
								style={{ height: 100, marginTop: "3em" }}
							  >
								<div className="my-auto">
								  <p className="mb-0 text-secondary" href="#">
									{this.state.result.farmer.first_name}  {this.state.result.farmer.last_name}
								  </p>
								  <p className="m-0 my-0 mb-0 text-muted">{this.state.result.farmer.address.address4}</p>
								  <p className="m-0 my-0 mb-2 text-muted">
									  {
											(this.state.result.farmer.address.address3)?((this.state.result.farmer.address.address3)+', '):""
									  }
									  {
											(this.state.result.farmer.address.address2)?((this.state.result.farmer.address.address2)+', '):""
									  }
								  {this.state.result.farmer.address.address1}
								  </p>
								  
								</div>
							  </div>
							</div>
						  </div>
						  <div className="card card-small">
							<div className="card-body p-0">
							  <ul className="list-group list-group-small list-group-flush">
								<li className="list-group-item d-flex px-3">
								  <span className="text-semibold text-fiord-blue my-auto text-reagent-gray">
									Farm Location
								  </span>
								  <span className="ml-auto text-right text-semibold">
									{/* Dindori Rd, Bajrang Nagar, Maharashtra 422207, India */}
									<button
									type="button"
									className="mb-2 btn btn-sm btn-success mr-1"
									onClick={()=>{
										const lat = this.state.result.plot.boundary.bounds[0][1]
										const long = this.state.result.plot.boundary.bounds[0][0]
									  const url='https://www.google.com/maps/search/?api=1&query='+lat+' '+long
									  window.open(url, '_blank')
									}}
								  >
									<i className="material-icons">gps_fixed</i>&nbsp; Locate
								  </button>
								  </span>
								</li>
								<li className="list-group-item d-flex px-3">
								  <span className="text-semibold text-fiord-blue text-reagent-gray">
									Farm Area
								  </span>
								  <span className="ml-auto text-left text-semibold">
									{this.state.result.plot.boundary.area} acres
								  </span>
								</li>
								<li className="list-group-item d-flex px-3">
								  <span className="text-semibold text-fiord-blue text-reagent-gray">
									Crop Variety
								  </span>
								  <span className="ml-auto text-left text-semibold">
									{/* Cauliflower - Cauliflower */}
									{this.state.result.plot.crop.name} - {this.state.result.plot.variety.name}
								  </span>
								</li>
								<li className="list-group-item d-flex px-3">
								  <span className="text-semibold text-fiord-blue text-reagent-gray">
									Harvest Date
								  </span>
								  <span className="ml-auto text-left text-semibold">
								  {this.state.result.plot.harvest.date}
								  </span>
								</li>
							  </ul>
							</div>
							<div className="card-footer border-top" />
						  </div>
						</div>
					  </div>
					  {/* End Users By Device Stats */}
					  {/* New Draft Component */}
					  {/* End New Draft Component */}
					  {/* Discussions Component */}
					  {/* End Top Referrals Component */}
					</div>
				  </div>
				  
				)
			}
			else{
				return(
					<div style={{minHeight: 'calc(100vh - 160px)', textAlign: 'center'}}>
						<img src="https://montage.ag/wp-content/uploads/2018/08/loading_screen_b.gif" alt="Loading..."></img>
						<p>Tracing...</p>
					</div>
				)
			}
		}
	

		if(!this.state.invalid){
			return (
				<div className="container-fluid">
			  <div className="row">
				<main className="main-content col-12 p-0">
				  <div className="main-navbar sticky-top bg-white">
					{/* Main Navbar */}
					<nav className="navbar align-items-stretch navbar-light flex-md-nowrap p-0">
					  <ul className="navbar-nav border-left flex-row ">
						<li className="nav-item dropdown ml-3">
						  <a href="https://agrotrust.io/" style={{ textDecoration: "none" }}>
							<h3
							  className="page-title"
							  style={{
								fontFamily: '"Ruda", sans-serif',
								lineHeight: "3.5rem"
							  }}
							>
							  <span style={{ color: "black" }}>AGRO</span>
							  <span style={{ color: "#31859C" }}>TRUST</span>
							</h3>
						  </a>
						</li>
					  </ul>
					</nav>
				  </div>
				  {/* / .main-navbar */}
			
				  {loadCheck()}
				  
				  <footer className="main-footer d-flex p-2 px-3 bg-white border-top">
					<span className="copyright ml-auto my-auto mr-2">
					  Copyright © 2019 &nbsp;
					  <a href="https://agrotrust.io" rel="nofollow">
						AgroTrust
					  </a>
					</span>
				  </footer>
				</main>
			  </div>
			</div>
			  )
		}
		else{
			return(
				<div className="container-fluid">
			  <div className="row">
				<main className="main-content col-12 p-0">
				  <div className="main-navbar sticky-top bg-white">
					{/* Main Navbar */}
					<nav className="navbar align-items-stretch navbar-light flex-md-nowrap p-0">
					  <ul className="navbar-nav border-left flex-row ">
						<li className="nav-item dropdown ml-3">
						  <a href="https://agrotrust.io/" style={{ textDecoration: "none" }}>
							<h3
							  className="page-title"
							  style={{
								fontFamily: '"Ruda", sans-serif',
								lineHeight: "3.5rem"
							  }}
							>
							  <span style={{ color: "black" }}>AGRO</span>
							  <span style={{ color: "#31859C" }}>TRUST</span>
							</h3>
						  </a>
						</li>
					  </ul>
					</nav>
				  </div>
				  {/* / .main-navbar */}
				  <p style={{margin: 0, padding: 0, textAlign: 'center', position: 'relative', top: '2em'}}>404, invalid URL</p>
				  <img src="/images/404.svg" style={{height: 'calc(100vh - 160px)', width: '100vw'}} alt="Kiwi standing on oval"/>
				  <footer className="main-footer d-flex p-2 px-3 bg-white border-top">
					<span className="copyright ml-auto my-auto mr-2">
					  Copyright © 2019 &nbsp;
					  <a href="https://agrotrust.io" rel="nofollow">
						AgroTrust
					  </a>
					</span>
				  </footer>
				</main>
			  </div>
			</div>
			  
			)
		}

			
		
	}

}

export default Trace;
