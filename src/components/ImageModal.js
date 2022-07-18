import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

export default function ImageModal({ modalContent }) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (Object.keys(modalContent).length > 0) {
            setIsOpen(true);
        }
    }, [modalContent]);

    const checkClose = (e) => {
        if (e.target.classList.contains("modal-container")) {
            setIsOpen(false);
        }
    };

    return (
        <ModalContainer
            onClick={checkClose}
            $isOpen={isOpen}
            className="modal-container"
        >
            <InnerContainer>
                <img
                    src={modalContent?.image}
                    alt="website project screenshot"
                />
                <Body>
                    <ul>
                        {modalContent &&
                            modalContent.list?.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                    </ul>
                </Body>
            </InnerContainer>
        </ModalContainer>
    );
}

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background: #000000bb;
    height: 100vh;
    width: 100vw;
    z-index: 10;
    opacity: ${(props) => (props.$isOpen ? 1 : 0)};
    pointer-events: ${(props) => (props.$isOpen ? "all" : "none")};
    transition: all 200ms ease-out;
`;

const InnerContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 200ms ease-out;
    background: white;
    overflow-y: auto;
    max-height: 90%;
    width: 50%;
    max-width: 700px;
    border-radius: 5px;

    @media (max-width: 700px) {
        width: 90%;
        max-height: 80%;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const Body = styled.div`
    padding: 2rem 1rem 2rem 3rem;

    @media (max-width: 700px) {
        padding-left: 0;
    }

    li {
        font-size: 1.5rem;
        margin-bottom: 1rem;

        @media (max-width: 700px) {
            font-size: 1rem;
        }
    }
`;
