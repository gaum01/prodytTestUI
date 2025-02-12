import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import BugReportIcon from '@mui/icons-material/BugReport';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import FeedbackIcon from '@mui/icons-material/Feedback';

export const routeData = [
    {
        id: 1,
        name: 'Dashboard',
        url: '/home/dashboard',
        componentName: 'Dashboard',
        navName: 'Home',
        icon: <HomeIcon />,
        top: true
    },
    {
        id: 2,
        name: 'Product',
        url: '/product/index',
        componentName: 'ProductIndex',
        navName: 'Product',
        icon: <CategoryIcon />,
        top: true
    },
    {
        id: 3,
        name: 'Complaint',
        url: 'complaint/index',
        componentName: 'ComplaintIndex',
        navName: 'Complaint',
        icon: <BugReportIcon />,
        top: true
    },
    {
        id: 4,
        name: 'Feedback',
        url: 'feedback/index',
        componentName: 'FeedbackIndex',
        navName: 'Feedback',
        icon: <FeedbackIcon />,
        top: true
    },
    {
        id: 6,
        name: 'Profile',
        url: 'profile/index',
        componentName: 'ProfileIndex',
        navName: 'Profile',
        icon: <AccountCircleIcon />,
    },
    {
        id: 7,
        name: 'Setting',
        url: 'setting/index',
        componentName: 'SettingIndex',
        navName: 'Setting',
        icon: <SettingsIcon />,
    },
  ];