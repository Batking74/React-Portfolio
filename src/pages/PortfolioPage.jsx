// Importing All Project Images
import Project from '../components/UI/Project';
import ArtPortfolioProjectImage from '../Assets/images/Art_Portfolio_Project.webp';
import BlogDesignProjectImage from '../Assets/images/Blog-Design-Project.webp';
import BudgetCalculatorProjectImage from '../Assets/images/Budget_Calculator_Project.webp';
import DigitalCalculatorProjectImage from '../Assets/images/Calculator_project.webp';
import EmployeeTrackerProjectImage from '../Assets/images/Employee-Tracker - 12_14_2023.webp';
import FindRepoIssuesProjectImage from '../Assets/images/Find-Repo-Issues-Project.webp';
import HoriseonProjectImage from '../Assets/images/Horiseon_Project.webp';
import LandingPageProject1Image from '../Assets/images/Landing_Page_Project_1.webp';
import LoginPageProjectImage from '../Assets/images/Login_Project.webp';
import MealDiscoveryProjectImage from '../Assets/images/Meal_Discovery_Project.webp';
import MedShareNetworkProjectImage from '../Assets/images/MedShareNetwork.webp';
import PortfolioProjectImage from '../Assets/images/Naz_Portfolio_Project_Screenshot.webp';
import PalmerStudiosProjectImage from '../Assets/images/Palmer_Studios_Project.webp';
import PasswordGeneratorProjectImage from '../Assets/images/Password Generator.webp';
import PortfolioWebsiteProjectImage from '../Assets/images/Portfolio_Website.webp';
import ProjectTrackerImage from '../Assets/images/Project-Tracker-Project.webp';
import StoreDesignProjectImage from '../Assets/images/Store-Design-Project.webp';
import TalkingComputerProjectImage from '../Assets/images/Talking_Computer_Project.webp';
import WeatherDashboardProjectImage from '../Assets/images/Weather-Dashboard.webp';
import WorkdayCalendarProjectImage from '../Assets/images/Work_day_calendar.webp';

export default function PortfolioPage() {
  return (
    <Project projects={[
      {
        Key: 1,
        Title: 'Digital Art Portfolio',
        Image: ArtPortfolioProjectImage,
        Link: 'https://batking74.github.io/Digital_Art_Portfolio_Project--First-ever-project-/'
      },
      {
        Key: 2,
        Title: 'Blog Design',
        Image: BlogDesignProjectImage,
        Link: 'https://batking74.github.io/Blog-Design/'
      },
      {
        Key: 3,
        Title: 'Budget Calculator',
        Image: BudgetCalculatorProjectImage,
        Link: 'https://budgeting-calculator-878dd6a27579.herokuapp.com/'
      },
      {
        Key: 4,
        Title: 'Digital Calculator Project',
        Image: DigitalCalculatorProjectImage,
        Link: 'https://batking74.github.io/Digital_Calculator_Project/'
      },
      {
        Key: 5,
        Title: 'Employee Tracker',
        Image: EmployeeTrackerProjectImage,
        Link: 'https://www.youtube.com/watch?v=4ukkirWouOk'
      },
      {
        Key: 6,
        Title: 'Find Repo Issues',
        Image: FindRepoIssuesProjectImage,
        Link: 'https://batking74.github.io/Find-Repo-Issues/'
      },
      {
        Key: 7,
        Title: 'Horiseon Project',
        Image: HoriseonProjectImage,
        Link: 'https://batking74.github.io/Horiseon-Project/'
      },
      {
        Key: 8,
        Title: 'Landing Page Project 1',
        Image: LandingPageProject1Image,
        Link: 'https://batking74.github.io/Landing-Page-Project/'
      },
      {
        Key: 9,
        Title: 'Login Page Project',
        Image: LoginPageProjectImage,
        Link: 'https://batking74.github.io/Login_Page_Project/'
      },
      {
        Key: 10,
        Title: 'Meal Discovery',
        Image: MealDiscoveryProjectImage,
        Link: 'https://mrwait-music.github.io/super-group-project/'
      },
      {
        Key: 11,
        Title: 'MedShareNetwork',
        Image: MedShareNetworkProjectImage,
        Link: 'https://medsharenetwork-3691a9c0e268.herokuapp.com/'
      },
      {
        Key: 12,
        Title: 'Portfolio Project',
        Image: PortfolioProjectImage,
        Link: 'https://batking74.github.io/Portfolio-Project/'
      },
      {
        Key: 13,
        Title: 'Palmer Studios',
        Image: PalmerStudiosProjectImage,
        Link: 'https://palmer-studios-f1975e2e82dd.herokuapp.com/'
      },
      {
        Key: 14,
        Title: 'Password Generator',
        Image: PasswordGeneratorProjectImage,
        Link: 'https://batking74.github.io/Password-Generator/'
      },
      {
        Key: 15,
        Title: 'Portfolio Website',
        Image: PortfolioWebsiteProjectImage,
        Link: 'https://batking74.github.io/Portfolio-Website/'
      },
      {
        Key: 16,
        Title: 'Project-Tracker',
        Image: ProjectTrackerImage,
        Link: 'https://batking74.github.io/Project-Tracker/'
      },
      {
        Key: 17,
        Title: 'Store Design',
        Image: StoreDesignProjectImage,
        Link: 'https://batking74.github.io/Store-Design/'
      },
      {
        Key: 18,
        Title: 'Talking Computer',
        Image: TalkingComputerProjectImage,
        Link: 'https://batking74.github.io/Talking_Computer_Project/'
      },
      {
        Key: 19,
        Title: 'Weather Dashboard',
        Image: WeatherDashboardProjectImage,
        Link: 'https://batking74.github.io/Weather-Dashboard/'
      },
      {
        Key: 20,
        Title: 'Work Day Scheduler',
        Image: WorkdayCalendarProjectImage,
        Link: 'https://batking74.github.io/Work-Day-Calendar/'
      }
    ]} />
  );
}