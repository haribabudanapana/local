
import { Page, Locator } from '@playwright/test';

export class SabaPage {
readonly courseHeader: Locator;
readonly ProgressandActivitiesLink: Locator;
readonly purchasedCourseLink: Locator;
readonly navBarMeLink: Locator;
readonly frame: Locator;
readonly loadingBar: Locator;
readonly enrolledCourses: Locator;
readonly enrolledCoursePopupText: Locator;
readonly LaunchBtnInCoursePage: Locator;
readonly CourseTitle: Locator;
readonly homeTab: Locator;
readonly groupsTab: Locator;
readonly sabaProfile: Locator;
readonly UserText: Locator;
readonly PleaseWaitLoader: Locator;



    constructor(page: Page) {
this.courseHeader = page.locator("//div[@class='trq-d-flex trq-flex-row']/h1");
this.ProgressandActivitiesLink = page.locator("//button[text()='Progress and Activities']");
this.purchasedCourseLink = page.locator("//a[contains(text(),'ASTM C172/C172M-14a Standard Practice for Sampling Freshly Mixed Concrete')]");
this.navBarMeLink = page.locator("//a/span[text()='Me']");
this.frame = page.locator("//iframe[@title='Main Content']");
this.loadingBar = page.locator("//div[@class='x-mask-msg-inner']");
this.enrolledCourses = page.locator("//tbody/tr/td[contains(@class,'x-grid-cell-header')]//a[contains(@title,'Course')]");
this.enrolledCoursePopupText = page.locator("//div[@class='loc-tip-icon-content']//div//div");
this.LaunchBtnInCoursePage = page.locator("//button[@title='Launch']");
this.CourseTitle = page.locator("//h1[contains(@class,'course-title')]");
this.homeTab = page.locator("//span[text()='Home']");
this.groupsTab = page.locator("//span[text()='Groups']");
this.sabaProfile = page.locator("//button[@aria-label='User Actions']");
this.UserText = page.locator("(//div[contains(@class,'trq-text-center')])[2]");
this.PleaseWaitLoader = page.locator("div.x-mask-msg-inner");


    }
}
