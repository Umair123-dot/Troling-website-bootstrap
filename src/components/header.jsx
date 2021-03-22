import { Button, Form } from 'react-bootstrap';
import Typed from 'react-typed';
import Particles from 'react-particles-js';
export const Header = (props) => {
	return (
		<header id='header'>
			<div className='intro'>
				<div className='overlay'>
					<div className='container'>
						<div className='row'>
							<div className='col-md-8 col-md-offset-2 intro-text'>
								{/* <Particles /> */}
								<h1>
									<Typed
										strings={[props.data ? props.data.title : 'Loading']}
										typeSpeed={40}
										backSpeed={70}
										typeSpeed={70}
										loop
									/>
									{/* {props.data ? props.data.title : 'Loading'} */}
									<span></span>
								</h1>
								<p>
									<Typed
										strings={[props.data ? props.data.paragraph : 'Loading']}
										typeSpeed={40}
										backSpeed={70}
										typeSpeed={70}
										loop
									/>
								</p>
								<Form>
									<Form.Group controlId='formBasicEmail'>
										<Form.Label>Email address</Form.Label>
										<Form.Control type='email' placeholder='Enter email' />
										<Form.Text className='text-muted'>
											We'll never share your email with anyone else.
										</Form.Text>
									</Form.Group>

									<Form.Group controlId='formBasicPassword'>
										<Form.Label>Password</Form.Label>
										<Form.Control type='password' placeholder='Password' />
									</Form.Group>

									<Button variant='primary' type='submit'>
										Submit
									</Button>
								</Form>
								<a href='#features' className='btn btn-custom btn-lg page-scroll'>
									Learn More
								</a>{' '}
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};
