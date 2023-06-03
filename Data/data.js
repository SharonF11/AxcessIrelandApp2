import Category from '../models/category';
import Meal from '../models/meal';

export const CATEGORIES = [
  new Category('c1', 'Government Supports', '#BD6513'),
  new Category('c2', 'Data Protection', '#00BF63'),
  new Category('c3', 'Legal', '#00BF63'),
  new Category('c4', 'Health', '#BD6513'),
  new Category('c5', 'Education', '#BD6513'),
  new Category('c6', 'Employment', '#00BF63'),
  new Category('c7', 'Application Help', '#00BF63'),
  new Category('c8', 'Communities', '#BD6513'),

];

export const MEALS = [
  new Meal(
    'm1',
    ['c1'],
    'GOVERNMENT SUPPORTS',
    'SOICAL WELFARE',
    'pps no',
    'https://en.wikipedia.org/wiki/Government_Buildings#/media/File:Government_Buildings,_Dublin.jpg',
    'MY GOV REGISTRATION',
    [
      'Finding the right support from the government is crucial for you. This page will provide you with information on all supports available and how to register your details on all government agenices that will aide you through how to start your journey in Ireland',
      '',
     'First step is to register with the gorenment on "mygov.ie"',
     '',
     'All parents with children under the age of 18 are entitled to Child Benefit from the Government. This is a monthly payment of €140 per child to support parents and guardians who lives with you and is being fully supported by you. The link here is to apply to child benefit: https://services.mywelfare.ie/en/topics/parents-children-family/child-benefit/',
    ],
    [
      'https://www.mygovid.ie',
      '',
      'https://services.mywelfare.ie/en/topics/parents-children-family/child-benefit/',
  
     
    ],
    false,
    true,
    true,
    true
  ),

  new Meal(
    'm2',
    ['c2'],
    'DATA PROTECTION',
    'PERSONAL DATA',
    'DATA PRIVACY',
    'https://cdn.pixabay.com/photo/2018/07/11/21/51/toast-3532016_1280.jpg',
    'GDPR',
    [
      'Personal data is information that relates to you, or can identify you, either by itself or together with other available information. Personal data can include your name, address, contact details, an identification number, IP address, CCTV footage, access cards, audio-visual or audio recordings of you, and location data.',
      'You have the rights to make a complaint to the Data Protection Commissioner if you feel your data is being shared with a third party.',
      'Some personal data is very sensitive and special rules apply to this information. These special categories include information that reveals any of the following.' ,
      'Your race or ethnic origin' ,
      'Your political opinions',
      'Your religious or philosophical beliefs', 
      'Your trade union membership', 
      'Your health', 
      'Any biometric information (for example, your fingerprints) or genetic data ',
      'Your sexual orientation or sex life ',
  
    ],
    [
      'https://www.dataprotection.ie',
      
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm3',
    ['c3'],
    'LEGAL INFORMATION',
    'RIGHT TO APPEAL',
    'LEGAL AID BOARD,',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'APPLICATIONS,',
    [
      'International protection is the name given to applications for asylum. The International Protection Office makes a determination based on the information you provide in your application.',
      '',
      'If you are applying for international protection status in Ireland you can apply for legal aid through the Legal Aid Board.',
      '',
      'At the end of the application process, you may be granted one of the following:', 
      'Refugee status',
      'Subsidiary protection status', 
      'Leave to remain ',
      '',
      'You have the right to appeal if your application is refused, if you dont appeal in time a deportation order may be made.',
      '',
      'There are several reasons why you can appeal and below are the links',
      'The second link below will bring to a page where the application forms are in differnct languages',
      '',
      'The Irish Refugee Council Independent Law Centre also provides early legal advice and representation to people in the early stages of the asylum process.',
    ],
    ['http://www.ipo.gov.ie',
    '',
    'http://www.ipo.gov.ie/en/IPO/Pages/IPO1',
      '',
      'https://www.legalaidboard.ie/en/',
      '',
      'https://www.protectionappeals.ie/wp-content/uploads/2021/11/Inadmissable-applications.pdf',
      'https://www.protectionappeals.ie/wp-content/uploads/2022/01/International-Protection-Appeals-form-1.pdf',
      '',
      'https://www.protectionappeals.ie/wp-content/uploads/2023/01/Notice-of-Appeal-Accelerated-appeal-procedures-Refugee-and-Subsidiary-Protection-Status-Appeal-Form-1A.pdf',
      '',
      'https://www.protectionappeals.ie/wp-content/uploads/2021/11/Subsequent-Applications.pdf',
      '',
      'https://www.irishrefugeecouncil.ie/Listing/Category/law-centre',
    ],
    false,
    false,
    false,
    true
  ),

  new Meal(
    'm4',
    ['c4'],
    'HEALTH',
    'HOSPITALS',
    'MEDICAL CARD,',
    'https://cdn.pixabay.com/photo/2018/03/31/19/29/schnitzel-3279045_1280.jpg',
    'FAMILY DOCTOR,',
    [
      'Here you will find access to healthcare services in Ireland. GP’s (family doctors), fees for accessing healthcare services, medical cards and GP visit cards, dental, aural and optical services, vaccination, prescription medication, pharmacies, health centres, and both in-patient and out-patient hospital services. ',
      '',
      'While you are in direct provision, you can apply and get a Medical Card, which gives you and your family free doctor (GP) appointments, free hospital care in public hospitals and prescriptions for a low cost. To apply for a medical card, you must first find a family doctor in your area.',
      '',
      'To find a Family Doctor in your area follow the link: https://www2.hse.ie/services/find-a-gp/ ',
      '',
      'To apply for your Medical Card follow the link: https://www.mymedicalcard.ie/  ',
    ],
    [
      'https://www2.hse.ie/services/find-a-gp/ .',
      '',
      'https://www.mymedicalcard.ie/',
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm5',
    [ 'c5'],
    'EDUCATION',
    'PRESCHOOL',
    'PRIMARY/SECONDARY SCHOOLS,',
    // 'https://cdn.pixabay.com/photo/2016/10/25/13/29/smoked-salmon-salad-1768890_1280.jpg',
    'https://pixabay.com/photos/school-work-write-still-life-851328/',
    'ADULT EDUCATION,',
    [
      'In Ireland it is the law that all children, from the ages of 2.9 years and young people, including children of IPA’s are entitled to free preschool (ECCE), primary and secondary education. This page will give you access to all pre-schools, primary and secondary schools. ',
      '',
      "To apply for children's education in Ireland the following link will show schools in your area. https://www.gov.ie/en/directory/category/495b8a-schools/, this is based on the area you live in",
      '',
      'You may have free access to adult literacy and English language classes. You can get information on English classes from your local Education and Training Board (ETB). This is a link to Education Training Board courses - "https://dublinadulteducation.ie/new-courses/"',
     '',
     'Due to a lack of access and many limiting barriers such as language, there are not enough  IPA’s in education. There are several schemes in place to assist IPA’s in attaining a third-level education, including the University and College of Sanctuary schemes being set up by institutions around the country. This is a link to education in Ireland for IPA applicants - https://pathwaystoprogress.ie/Education-for-Asylum-Seekers?lang=.',
    ],
    [
      'https://www.gov.ie/en/directory/category/495b8a-schools/',
      '',
      'https://dublinadulteducation.ie/new-courses/',
      '',
      'https://pathwaystoprogress.ie/Education-for-Asylum-Seekers?lang=',
      
    ],
    true,
    false,
    true,
    true
  ),

  new Meal(
    'm6',
    ['c6'],
    'EMPLOYMENT',
    'WRITING YOUR CV',
    'VOLUNTARY WORK',
    'https://cdn.pixabay.com/photo/2017/05/01/05/18/pastry-2274750_1280.jpg',
    'EMPLOYMENT OPPORTUNITIES,',
    [
      'If you are an IPA or refugee living in Ireland you may be entitled to work in Ireland. This is the  page where you can start your journey from writing CV’s to job offers and acceptance.',

      'You are not allowed to work until you have been waiting for 6 months for the IPO to issue its first decision (called the ‘first instance recommendation’) on your application.',
      '', 
      'There is a scheme called Labour Market Access Permission, where you can find out if you are entitled to work in Ireland and make an applciation. ',
      'This is the link "https://www.irishimmigration.ie/my-situation-has-changed-since-i-arrived-in-ireland/labour-market-access-permission/"',
      '',
      'If you get permission to work, it is valid from when you have been waiting for a decision on your IPO application for 6 months.',
      '',
      'To apply for permission to work, you: ',
      'Fill in a Form LMA3 (if you are not sure how to fill this in, you can visit your local Citizens Information Centre) and send it to Immigration Services Delivery (see ‘Further information and contacts’ below)', 
      '',
      'You can also apply for permission to be self-employed if you want to work for yourself.', 
      '',
      'If your application is successful, Immigration Services Delivery will send you a letter giving you permission to work. ',
      '',
      'When you find a job, your employer (or you if you are self-employed) should send Form LMA5 to the Immigration Services Division. ',
      '',
      'You should apply to renew your permission to work one month before it expires using Form LMA4.', 
      '',
      'Here we will have templates for writing a cv and provide help in doing so',
    ],
    [
      'https://www.irishimmigration.ie/my-situation-has-changed-since-i-arrived-in-ireland/labour-market-access-permission/',
      '',
      'https://www.irishimmigration.ie/wp-content/uploads/2022/09/LMA3-September-2022.pdf',
      '',
      'https://www.irishimmigration.ie/wp-content/uploads/2021/10/form-LMA5.pdf',
      '',
      'https://www.irishimmigration.ie/wp-content/uploads/2022/09/LMA4-September-2022.pdf',
      
    ],
    true,
    false,
    true,
    false
  ),

  new Meal(
    'm7',
    ['c7'],
    'Pancakes',
    'affordable',
    'simple',
    'https://cdn.pixabay.com/photo/2018/07/10/21/23/pancake-3529653_1280.jpg',
    20,
    [
      '1 1/2 Cups all-purpose Flour',
      '3 1/2 Teaspoons Baking Powder',
      '1 Teaspoon Salt',
      '1 Tablespoon White Sugar',
      '1 1/4 cups Milk',
      '1 Egg',
      '3 Tablespoons Butter, melted'
    ],
    [
      'In a large bowl, sift together the flour, baking powder, salt and sugar.',
      'Make a well in the center and pour in the milk, egg and melted butter; mix until smooth.',
      'Heat a lightly oiled griddle or frying pan over medium high heat.',
      'Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.'
    ],
    true,
    false,
    true,
    false
  ),

  new Meal(
    'm8',
    ['c8'],
    'Creamy Indian Chicken Curry',
    'pricey',
    'challenging',
    'icon.png',
    35,
    [
      '4 Chicken Breasts',
      '1 Onion',
      '2 Cloves of Garlic',
      '1 Piece of Ginger',
      '4 Tablespoons Almonds',
      '1 Teaspoon Cayenne Pepper',
      '500ml Coconut Milk'
    ],
    [
      'Slice and fry the chicken breast',
      'Process onion, garlic and ginger into paste and sauté everything',
      'Add spices and stir fry',
      'Add chicken breast + 250ml of water and cook everything for 10 minutes',
      'Add coconut milk',
      'Serve with rice'
    ],
    true,
    false,
    false,
    true
  ),
];