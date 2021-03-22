import { Link } from 'react-router-dom';
export const Navigation = (props) => {
	return (
		<nav id='menu' className='navbar navbar-default navbar-fixed-top'>
			<div className='container'>
				<div className='navbar-header'>
					<button
						type='button'
						className='navbar-toggle collapsed'
						data-toggle='collapse'
						data-target='#bs-example-navbar-collapse-1'
					>
						<span className='sr-only'>Toggle navigation</span> <span className='icon-bar'></span>{' '}
						<span className='icon-bar'></span>
						<span className='icon-bar'></span>
					</button>
					<Link className='navbar-brand page-scroll' to='/'>
						Web Police
					</Link >
				</div>

				<div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
					<ul className='nav navbar-nav navbar-right'>
						<li>
							<Link to='/Features' className='page-scroll'>Features</Link >
						</li>
						<li>
							<Link to='/About' className='page-scroll'>
								About
							</Link >
						</li>
						{/* <li>
              <a href='#services' className='page-scroll'>
                Services
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>
                Gallery
              </a>
            </li>
            <li>
              <a href='#testimonials' className='page-scroll'>
                Testimonials
              </a>
            </li> */}
						<li>
							<Link to='/Contact' className='page-scroll'>
								Contact
							</Link>
						</li>
						<li>
							<Link to='/signup' className='page-scroll'>
								Registeration
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
