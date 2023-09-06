import React, { ReactElement } from 'react';
import Route from 'Common/Types/API/Route';
import IconProp from 'Common/Types/Icon/IconProp';
import SideMenu from 'CommonUI/src/Components/SideMenu/SideMenu';
import SideMenuItem from 'CommonUI/src/Components/SideMenu/SideMenuItem';
import SideMenuSection from 'CommonUI/src/Components/SideMenu/SideMenuSection';
import RouteMap, { RouteUtil } from '../../Utils/RouteMap';
import PageMap from '../../Utils/PageMap';

const DashboardSideMenu: () => JSX.Element = (): ReactElement => {
    return (
        <SideMenu>

            <SideMenuSection title="Basic">
                <SideMenuItem
                    link={{
                        title: 'Host',
                        to: RouteUtil.populateRouteParams(
                            RouteMap[PageMap.SETTINGS_HOST] as Route
                        ),
                    }}
                    icon={IconProp.Globe}
                />
            </SideMenuSection>

            <SideMenuSection title="Notifications">
                <SideMenuItem
                    link={{
                        title: 'Emails',
                        to: RouteUtil.populateRouteParams(
                            RouteMap[PageMap.SETTINGS_SMTP] as Route
                        ),
                    }}
                    icon={IconProp.Email}
                />
                <SideMenuItem
                    link={{
                        title: 'Call and SMS',
                        to: RouteUtil.populateRouteParams(
                            RouteMap[PageMap.SETTINGS_CALL_AND_SMS] as Route
                        ),
                    }}
                    icon={IconProp.Call}
                />
            </SideMenuSection>

            <SideMenuSection title="Monitoring">
                <SideMenuItem
                    link={{
                        title: 'Global Probes',
                        to: RouteUtil.populateRouteParams(
                            RouteMap[PageMap.SETTINGS_PROBES] as Route
                        ),
                    }}
                    icon={IconProp.Signal}
                />
            </SideMenuSection>

            
        </SideMenu>
    );
};

export default DashboardSideMenu;