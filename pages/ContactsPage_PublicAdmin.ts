import { Page, Locator } from '@playwright/test';

export class ContactsPage_PublicAdmin {
	page: Page;
  addContactButton: Locator;
  spinnerIcon: Locator;
  emailColumn: Locator;
  editButton: Locator;
  firstName: Locator;
  middleName: Locator;
  lastName: Locator;
  email: Locator;
  phoneNumber: Locator;
  jobTitle: Locator;
  billTo: Locator;
  shipTo: Locator;
  delieverTo: Locator;
  tptLearner: Locator;
  active: Locator;
  columns: Locator;
  columnNames: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addContactButton = page.locator("button[data-index='add_contact']");
    this.spinnerIcon = page.locator("div[data-component*='customer_contact_listing'] div.spinner");
    this.emailColumn = page.locator("div[data-bind*='customer_contact_listing'] table.data-grid tbody tr.data-row td:nth-child(5)");
    this.editButton = page.locator("div[data-bind*='customer_contact_listing'] table.data-grid tbody tr.data-row td:nth-child(12) a");
    this.firstName = page.locator("div[data-bind*='customer_contact_listing'] table.data-grid tbody tr.data-row td:nth-child(2)");
    this.middleName = page.locator("div[data-bind*='customer_contact_listing'] table.data-grid tbody tr.data-row td:nth-child(3)");
    this.lastName = page.locator("div[data-bind*='customer_contact_listing'] table.data-grid tbody tr.data-row td:nth-child(4)");
    this.email = page.locator("div[data-bind*='customer_contact_listing'] table.data-grid tbody tr.data-row td:nth-child(6)");
    this.phoneNumber = page.locator("div[data-bind*='customer_contact_listing'] table.data-grid tbody tr.data-row td:nth-child(5)");
    this.jobTitle = page.locator("div[data-bind*='customer_contact_listing'] table.data-grid tbody tr.data-row td:nth-child(7)");
    this.billTo = page.locator("div[data-bind*='customer_contact_listing'] table.data-grid tbody tr.data-row td:nth-child(9)");
    this.shipTo = page.locator("div[data-bind*='customer_contact_listing'] table.data-grid tbody tr.data-row td:nth-child(10)");
    this.delieverTo = page.locator("div[data-bind*='customer_contact_listing'] table.data-grid tbody tr.data-row td:nth-child(11)");
    this.tptLearner = page.locator("div[data-bind*='customer_contact_listing'] table.data-grid tbody tr.data-row td:nth-child(8)");
    this.active = page.locator("div[data-bind*='customer_contact_listing'] table.data-grid tbody tr.data-row td:nth-child(1)");
    this.columns = page.locator("div[data-bind*='customer_contact_listing'] table.data-grid thead th");
    this.columnNames = page.locator("#modal-content-21 table[data-role='grid'] >thead tr th");

      
  }

 



}