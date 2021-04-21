export interface IUser {
    _id: string;
    username: string,
    wallet_id: string,
    bio: string,
    profile_image: string,
    email_address: string,
    // catelog: [
    //     new Schema({
    //         name: {
    //             type: String,
    //             required: true
    //         },
    //         artist: {
    //             type: String,
    //             required: true
    //         },
    //         description: {
    //             type: String,
    //             required: true
    //         },
    //         token_id: {
    //             type: String,
    //             required: true
    //         },
    //         raw_image: {
    //             type: String,
    //             required: false
    //         },
    //         thumbnail_image: {
    //             type: String,
    //             required: true
    //         },
    //         tags: [
    //             new Schema({
    //                 name: {
    //                     type: String,
    //                     required: true
    //                 },
    //                 popularity: {
    //                     type: Number,
    //                     required: false
    //                 }
    //             })
    //         ],
    //         timestamp: {
    //             type: Date,
    //             default: Date.now
    //         }
    //     })
    // ],
    collections: [
        // new Schema({
        //     name: {
        //         type: String,
        //         required: true
        //     },
        //     artist: {
        //         type: String,
        //         required: true
        //     },
        //     description: {
        //         type: String,
        //         required: true
        //     },
        //     token_id: {
        //         type: String,
        //         required: true
        //     },
        //     raw_image: {
        //         type: String,
        //         required: false
        //     },
        //     thumbnail_image: {
        //         type: String,
        //         required: true
        //     },
        //     tags: [
        //         new Schema({
        //             name: {
        //                 type: String,
        //                 required: true
        //             },
        //             popularity: {
        //                 type: Number,
        //                 required: false
        //             }
        //         })
        //     ],
        //     timestamp: {
        //         type: Date,
        //         default: Date.now
        //     }
        // })
    ],
    date_created: Date
}