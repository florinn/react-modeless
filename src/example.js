import React from 'react'
import ReactDOM from 'react-dom'

import './example.less'
import DialogBox from '../../.'

const style = {
	width: '60rem',
	height: '20rem',
	boxShadow: 'rgba(0,0,0,.3) 0 0.3rem 1rem',
	background: 'red'
}

class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			isDialogOpen: false,
			isDialogModal: false
		}

		this.onOpenModeless = this.onOpenModeless.bind(this)
		this.onOpenModal = this.onOpenModal.bind(this)
		this.onClose = this.onClose.bind(this)
	}

	onOpenModeless(e) {
		this.setState({ isDialogOpen: true })
		this.setState({ isDialogModal: false })
	}

	onOpenModal(e) {
		this.setState({ isDialogOpen: true })
		this.setState({ isDialogModal: true })
	}

	onClose(e) {
		this.setState({ isDialogOpen: false })
	}

	render() {
		return (
			<div>
				<button onClick={this.onOpenModeless}>Open modeless</button>
				<button onClick={this.onOpenModal}>Open modal</button>
				<DialogBox
					isOpen={this.state.isDialogOpen}
					onClose={this.onClose}
					style={style}
					containerClassName={'container'}
					noBackdrop={!this.state.isDialogModal}
					clickBackdropToClose={false}>
					<div className='content'>
						<h2>This is a dialog box</h2>
						<button onClick={this.onClose}>Close dialog</button>
					</div>
				</DialogBox>
			</div >
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'))
