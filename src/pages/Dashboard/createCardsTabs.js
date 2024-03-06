import { useEffect, useState } from "react";
import { getUserTabs } from "../../utils/api";
import CreateCard from "../../utils/createCardTab";

import { TabsConteiner, ModelDivisior } from "../../styles";

export default function CreateCardsTabs(user) {

    const [tabs, setTabs] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (user) {
            getUserTabs(user.id)
                .then(({ data }) => {
                    setTabs(data);
                })
                .catch((err) => {
                    setError(err);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }, [user]);
    console.log(tabs);
    return (
        <Tabs tabs={tabs} />
    )
}


const Tabs = ({ tabs }) => {
    if (!tabs) {
        return <div>Loading...</div>;
    }

    const FiltredTabs = tabs?.filter((Tab) => Tab.ficha !== undefined && Tab.id !== undefined);

    if (!FiltredTabs) {
        return (<div>ERROR</div>);
    }

    const OrdenedTabs = {};
    FiltredTabs.sort((a, b) => a.ficha - b.ficha).forEach((Tab) => {

        if (!OrdenedTabs[Tab.model_id]) {
            OrdenedTabs[Tab.model_id] = [];
        }


        OrdenedTabs[Tab.model_id].push(Tab);
    });
    return (
        <TabsConteiner>
            {flexGridTabs(OrdenedTabs)}
        </TabsConteiner>

    );
};

function flexGridTabs(tabs) {
    return Object.values(tabs).map((Tabs, index) => {
        return (
            <ModelDivisior key={index}>
                {Tabs.map((tab) => {
                    return (
                        <CreateCard Tab={tab} />
                    );
                })}

            </ModelDivisior>)
    })
}