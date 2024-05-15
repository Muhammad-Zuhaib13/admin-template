// project import
import applications from './applications';
import widget from './widget';
import formsTables from './forms-tables';
import chartsMap from './charts-map';
import other from './other';
import pages from './pages';
import systemConfiguration from './system-configuration';
import administration from './administration';

// types
import { NavItemType } from 'types/menu';

// ==============================|| MENU ITEMS ||============================== //

const menuItems: { items: NavItemType[] } = {
  items: [systemConfiguration, administration, widget, applications, formsTables, chartsMap, pages, other]
};

export default menuItems;
