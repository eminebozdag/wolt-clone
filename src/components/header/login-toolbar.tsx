import Button from "components/button";
import TriangleIcon from "components/icons/triangle-icon";
import {CSSTransition} from "react-transition-group";

interface Props {
	show: boolean;

	onLogin?(e: any): void;
	onClose?(e: any): void;
}

const LoginToolbar = ({onLogin, show, onClose}: Props) => {
	return (
		<CSSTransition in={show} unmountOnExit timeout={0} classNames="modal-fade">
			<div className="bg-c-white rounded-lg z-50" onClick={onClose} data-testid="login-toolbar-component">
				<div className="absolute w-4 h-2 right-5 top-[-7.7px] z-10">
					<TriangleIcon className="fill-c-white" />
				</div>

				<div className="relative bg-c-white min-h-[1.75rem] rounded-lg shadow-c-md z-0">
					<div className="relative min-w-[12rem] border-0.2 border-c-gray rounded-lg overflow-hidden">
						<div className="w-auto h-auto">
							<div className="p-[7px]">
								<Button variant="toolbar" onClick={onLogin}>
									Login or register
								</Button>
							</div>
							<hr className="border-c-gray"></hr>
							<div className="p-[7px]">
								<Button variant="toolbar">Language: English</Button>
								<Button variant="toolbar">Support</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</CSSTransition>
	);
};

export type {Props};
export default LoginToolbar;
