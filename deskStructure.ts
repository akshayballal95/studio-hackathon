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