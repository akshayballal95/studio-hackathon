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
        )
    ]) 