import { Chip, List, Placeholder } from "@telegram-apps/telegram-ui";
import { FC, useEffect, useState } from "react";

import { useLaunchParams } from "@tma.js/sdk-react";
import { MyTestResponse } from "../../../functions/test";
import { getTestDataRequest } from "@/api/api";

export const SnackbarPage: FC = () => {
    // const [isDeleteSnackbarShown, setIsDeleteSnackbarShown] = useState(false);
    // const [isUndoSnackbarShown, setIsUndoSnackbarShown] = useState(false);
    const [data, setData] = useState<MyTestResponse>();

    const lp = useLaunchParams();

    useEffect(() => {
        if (!lp.initDataRaw) return;
        getTestDataRequest(lp.initDataRaw)
            .then(response => {
                setData(response);
            }).catch(error => console.error(error));
    }, [lp])


    return (
        <>
            <List>
                {data ? (
                    data.users.map((user, index) => (
                        <div key={index}
                            style={{
                                display: 'flex',
                                justifyContent: "center",
                                justifyItems: "center",
                                gap: 16
                            }}
                        >
                            <Chip>
                                {user.id} - {user.username} - {user.email} - {user.created_at}
                            </Chip>
                        </div>
                    ))
                ) : (
                    <Placeholder
                        header="Loading..."
                        description="Please wait while we fetch the data."
                    />
                )}
            </List>
            {/* <Modal
                header={<ModalHeader>Only iOS header</ModalHeader>}
                trigger={<Button style={{
                    position: 'absolute',
                    left: '50%',
                    top: '200px',
                    transform: 'translateX(-50%)'}} size="m">Open modal</Button>}
            >
                <Placeholder
                    description="Description"
                    header="Title"
                >
                    <img
                        alt="Telegram sticker"
                        src="https://xelene.me/telegram.gif"
                        style={{
                            display: 'block',
                            height: '144px',
                            width: '144px'
                        }}
                    />
                </Placeholder>
            </Modal> */}
        </>
    );
};



