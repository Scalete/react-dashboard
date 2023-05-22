export interface Customer { 
    fullName: string;
    company: string;
    tel: string;
    email: string;
    country: string;
    status?: string;
}

export const data: Customer[] = [
    {
      fullName: "Jane Cooper",
      company: "Microsoft",
      tel: "(225) 555-0118",
      email: "jane@microsoft.com",
      country: "United States",
      status: "Active"
    },
    {
      fullName: "Floyd Miles",
      company: "Yahoo",
      tel: "(205) 555-0100",
      email: "floyd@yahoo.com",
      country: "Kiribati",
      status: "Inactive"
    },
    {
      fullName: "Ronald Richards",
      company: "Adobe",
      tel: "(302) 555-0107",
      email: "ronald@adobe.com",
      country: "Israel",
      status: "Inactive"
    },
    {
      fullName: "Marvin McKinney",
      company: "Tesla",
      tel: "(252) 555-0126",
      email: "marvin@tesla.com",
      country: "Iran",
      status: "Active"
    },
    {
      fullName: "Jerome Bell",
      company: "Google",
      tel: "(629) 555-0129",
      email: "jerome@google.com",
      country: "Réunion",
      status: "Active"
    },
    {
      fullName: "Kathryn Murphy",
      company: "Microsoft",
      tel: "(406) 555-0120",
      email: "kathryn@microsoft.com",
      country: "Curaçao",
      status: "Active"
    },
    {
      fullName: "Jacob Jones",
      company: "Yahoo",
      tel: "(208) 555-0112",
      email: "jacob@yahoo.com",
      country: "Brazil",
      status: "Active"
    },
    {
      fullName: "Kristin Watson",
      company: "Facebook",
      tel: "(704) 555-0127",
      email: "kristin@facebook.com",
      country: "Åland Islands",
      status: "Inactive"
    }
];