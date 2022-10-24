import React from 'react'
import { Tab, Tabs as TabsComponent, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const AdminTabs = ({ data }) => {
    return (
        <TabsComponent>
            <TabList>
                {data.map(({ heading }, i) => (
                    <Tab key={i}>{heading}</Tab>
                ))}
            </TabList>
            {data.map(({ body }, i) => (
                <TabPanel key={i}>{body}</TabPanel>
            ))}
        </TabsComponent>
    )
}

export default AdminTabs