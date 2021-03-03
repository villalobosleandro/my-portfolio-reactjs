import React, { useState } from "react";

import {ModalImagePreview} from './../ModalImagePreview';
import styles from './Galery.module.css';

import data from './../../utils/data';

export const Gallery = props => {
    const [open, setOpen] = useState(false);
    const [elementSelected, setElementSelected] = useState({});

    const handleClickOpen = (element) => {
        setElementSelected(element);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div id="portfolio" className="text-center">
            <div className="container">
                {
                    open && (
                        <ModalImagePreview
                            open={open}
                            handleClose={handleClose}
                            setOpen={setOpen}
                            element={elementSelected}
                        />
                    )
                }
                <div className="section-title">
                    <h2>Gallery</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        duis sed
                        dapibus leonec.
                    </p>
                </div>
                <div className="row">

                    {
                        data.data.map((element, index) => {
                            return(
                                <div
                                    key={index}
                                    className="col-sm-6 col-md-4 col-lg-4"
                                    onClick={() => handleClickOpen(element)}
                                >
                                    <div className={styles.containerProduct}>
                                        <div className="hover-bg">
                                            <div className="hover-text">
                                                <h4>{element.name}</h4>
                                            </div>
                                            <img
                                                src={element.images[0]}
                                                className={styles.imageResponsive}
                                                alt="Project Title"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }


                </div>
            </div>
        </div>
    );

}

