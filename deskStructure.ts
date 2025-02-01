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
        S.listItem()
        .title('Safety and Protection')
        .child(
          S.list()
            .title('Safety and Protection')
            .items([
              S.listItem()
                .title('Emergency Services & Police')
                .child(
                  S.documentList()
                    .title('Emergency Services & Police')
                    .filter('_type == "safetyAndProtection" && safetyType == "emergencyPolice"')
                ),
              S.listItem()
                .title('Domestic Violence')
                .child(
                  S.documentList()
                    .title('Domestic Violence')
                    .filter('_type == "safetyAndProtection" && safetyType == "domesticViolence"')
                ),
              S.listItem()
                .title('Criminal Exploitation')
                .child(
                  S.documentList()
                    .title('Criminal Exploitation')
                    .filter('_type == "safetyAndProtection" && safetyType == "criminalExploitation"')
                ),
              S.listItem()
                .title('Sexual Exploitation')
                .child(
                  S.documentList()
                    .title('Sexual Exploitation')
                    .filter('_type == "safetyAndProtection" && safetyType == "sexualExploitation"')
                ),
              S.listItem()
                .title('Labour Exploitation')
                .child(
                  S.documentList()
                    .title('Labour Exploitation')
                    .filter('_type == "safetyAndProtection" && safetyType == "labourExploitation"')
                )
            ])
        ),
    ]) 