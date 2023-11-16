import { ModalClose } from '../../assets/svgs';
import { ModalCon } from './styles';
import { useRef } from 'react';
import { useEffect } from 'react';

const Modal = ({ children, showModal, closeModal, heading, editing, size }) => {
	const modalRef = useRef();

	useEffect(() => {
		const handleClickOutside = (e) => {
			if (modalRef.current && !modalRef.current.contains(e.target)) {
				closeModal();
			}
		};

		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [showModal, closeModal]);

	return showModal ? (
		<ModalCon size={size ? size : 'small'}>
			<div ref={modalRef} className="modal--content">
				<header>
					{heading && <h1>{heading}</h1>}
					{editing && (
						<p>
							This event was created on - <span>Sept. 16, 2022</span>
						</p>
					)}
					<ModalClose onClick={() => closeModal()} />
				</header>
				{children}
			</div>
		</ModalCon>
	) : null;
};

export default Modal;
