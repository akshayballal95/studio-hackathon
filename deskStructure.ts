import {StructureBuilder} from 'sanity/structure'

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      // Regular post type
      S.listItem()
        .title('Posts')
        .child(
          S.documentList()
            .title('Posts')
            .filter('_type == "post"')
        ),

      S.listItem()
        .title('Dentists')
        .child(
        S.documentList()
          .title('Dentists')
          .filter('_type == "dentist"')
      ),
      S.listItem()
        .title('Legal')
        .child(
        S.documentList()
          .title('Legal')
          .filter('_type == "legal"'),
        ),
      S.listItem()
        .title('Work')
        .child(
        S.documentList()
          .title('Labour Rights Information')
          .filter('_type == "work"')
      ),
      S.listItem()
        .title('Where to go first')
        .child(
        S.documentList()
          .title('Where to go first')
          .filter('_type == "whereToGo"')
      ),

      // Shelters category
      S.listItem()
        .title('Shelters')
        .child(
          S.list()
            .title('Shelters')
            .items([
              // Day Shelters
              S.listItem()
                .title('Day Shelters')
                .child(
                  S.documentList()
                    .title('Day Shelters')
                    .filter('_type == "shelter" && shelterType == "day')
                ),
              
              // Night Shelters
              S.listItem()
                .title('Night Shelters')
                .child(
                  S.documentList()
                    .title('Night Shelters')
                    .filter('_type == "shelter" && shelterType == "night"')
                )
            ])
        ),

      S.listItem()
      .title("Health and Wellbeing")
      .child(
        S.list()
        .title('Health and Wellbeing')
        .items([
          S.listItem()
          .title('Documents explaining healthcare')
          .child(
            S.documentList()
            .title('Documents explaining healthcare')
            .filter('_type == "healthAndWellbeing"')
          ),
          S.listItem()
          .title('Emergency Lines')
          .child(
            S.documentList()
            .title('Emergency Lines')
            .filter('_type == "emergencyLines"')
          ),
          S.listItem()
          .title('Doctor')
          .child(
            S.documentList()
            .title('Doctor')
            .filter('_type == "doctors"')
          ),
          S.listItem()
          .title('Medication')
          .child(
            S.documentList()
            .title('Medication')
            .filter('_type == "medication"')
          ),
          S.listItem()
          .title('Sexual Health')
          .child(
            S.documentList()
            .title('Sexual Health')
            .filter('_type == "sexualHealth"')
          ),
          S.listItem()
          .title('Mental Wellbeing')
          .child(
            S.documentList()
            .title('Mental Wellbeing')
            .filter('_type == "mentalWellbeing"')
          ),
          S.listItem()
          .title('Hygiene')
          .child(
            S.documentList()
            .title('Hygiene')
            .filter('_type == "hygiene"')
          ),

        ])
         
      ),


      // Food&Clothing category
      S.listItem()
        .title('Food and Clothing')
        .child(
          S.list()
            .title('Food and Clothing')
            .items([
              // Day Shelters
              S.listItem()
                .title('Food')
                .child(
                  S.documentList()
                    .title('Food')
                    .filter('_type == "foodAndClothing" && foodOrClothing == "food"')
                ),
              
              // Night Shelters
              S.listItem()
                .title('Clothing')
                .child(
                  S.documentList()
                    .title('Clothing')
                    .filter('_type == "foodAndClothing" && foodOrClothing == "clothing"')
                )
            ])
        ),
      // Safety and protection thingies
      S.listItem()
      .title("Safety and Protection")
      .child(
        S.list()
        .title('Safety and Protection')
        .items([
          S.listItem()
          .title('Emergency Services & Police')
          .child(
            S.documentList()
            .title('Emergency Services & Police')
            .filter('_type == "emergencyPolice"')
          ),
          S.listItem()
          .title('Domestic Violence')
          .child(
            S.documentList()
            .title('Domestic Violence')
            .filter('_type == "domesticViolence"')
          ),
          S.listItem()
          .title('Criminal Exploitation')
          .child(
            S.documentList()
            .title('Criminal Exploitation')
            .filter('_type == "criminalExploitation"')
          ),
          S.listItem()
          .title('Sexual Exploitation')
          .child(
            S.documentList()
            .title('Sexual Exploitation')
            .filter('_type == "sexualExploitation"')
          ),
          S.listItem()
          .title('Labour Exploitation')
          .child(
            S.documentList()
            .title('Labour Exploitation')
            .filter('_type == "labourExploitation"')
          ),
        ]) 
      ),
      S.listItem()
      .title("Asylum and Return")
      .child(
        S.list()
        .title('Asylum and Return')
        .items([
          S.listItem()
          .title('First Asylum Request')
          .child(
            S.documentList()
            .title('First Asylum Request')
            .filter('_type == "firstAsylumRequest"')
          ),
          S.listItem()
          .title('Legal Advice After Rejection')
          .child(
            S.documentList()
            .title('Legal Advice After Rejection')
            .filter('_type == "afterRejection"')
          ),
          S.listItem()
          .title('Support with Voluntary Return')
          .child(
            S.documentList()
            .title('Support with Voluntary Return')
            .filter('_type == "voluntaryReturn"')
          ),
        ])
      ),
      S.listItem()
      .title("Support for Women")
      .child(
        S.list()
        .title('Support for Women')
        .items([
          S.listItem()
          .title('Pregnancy Care')
          .child(
            S.documentList()
            .title('Pregnancy Care')
            .filter('_type == "pregnancyCare"')
          ),
          S.listItem()
          .title('Birth Control and Menstruation')
          .child(
            S.documentList()
            .title('Birth Control and Menstruation')
            .filter('_type == "birthControlAndMenstruation"')
          ),
          S.listItem()
          .title('Organizations that can help')
          .child(
            S.documentList()
            .title('Legal Advice After Rejection')
            .filter('_type == "organizationsThatCanHelp"')
          ),
          S.listItem()
          .title('Abortion')
          .child(
            S.documentList()
            .title('Abortion')
            .filter('_type == "abortion"')
          ),
        ])
      ),
    ]) 