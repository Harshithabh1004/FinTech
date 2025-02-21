import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    children: [
      {
      path: '',
      loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
    },
    {
        path: 'user-login',
        loadComponent: () => import('./home/user-login/user-login.page').then( m => m.UserLoginPage)
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./home/dashboard/dashboard.page').then( m => m.DashboardPage)
      },
      {
        path: 'notification',
        loadComponent: () => import('./home/notification/notification.page').then( m => m.NotificationPage)
      },
      {
        path: 'money',
        loadComponent: () => import('./home/money/money.page').then( m => m.MoneyPage)
      },
      {
        path: 'banking',
        loadComponent: () => import('./home/banking/banking.page').then( m => m.BankingPage)
      },
      {
        path: 'invest',
        loadComponent: () => import('./home/invest/invest.page').then( m => m.InvestPage)
      },
      {
        path: 'explore',
        loadComponent: () => import('./home/explore/explore.page').then( m => m.ExplorePage)
      },
      {
        path: 'userprofile',
        loadComponent: () => import('./home/userprofile/userprofile.page').then( m => m.UserprofilePage)
      },
      {
        path: 'credit-score',
        loadComponent: () => import('./home/credit-score/credit-score.page').then( m => m.CreditScorePage)
      },
      {
        path: 'bank-balance',
        loadComponent: () => import('./home/bank-balance/bank-balance.page').then( m => m.BankBalancePage)
      },
      {
        path: 'company',
        loadComponent: () => import('./home/company/company.page').then( m => m.CompanyPage)
      },
      {
        path: 'funds',
        loadComponent: () => import('./home/funds/funds.page').then( m => m.FundsPage)
      },
      {
        path: 'settings',
        loadComponent: () => import('./home/settings/settings.page').then( m => m.SettingsPage)
      },
      {
        path: 'aboutme',
        loadComponent: () => import('./home/aboutme/aboutme.page').then( m => m.AboutmePage)
      },
      {
        path: 'privacy',
        loadComponent: () => import('./home/privacy/privacy.page').then( m => m.PrivacyPage)
      },
      {
        path: 'help',
        loadComponent: () => import('./home/help/help.page').then( m => m.HelpPage)
      },
      {
        path: 'invitefriends',
        loadComponent: () => import('./home/invitefriends/invitefriends.page').then( m => m.InvitefriendsPage)
      },
      
    ],
},
  {
    path: '',
    redirectTo: 'splash-screen',
    pathMatch: 'full',
  },
  {
    path: 'splash-screen',
    loadComponent: () => import('./home/splash-screen/splash-screen.page').then( m => m.SplashScreenPage)
  },
  
  
 
 
  
];
