let app = new Vue(
    {
        el: "#root",
        data: {
            images: [
                "img/photo1.jpg",
                "img/photo2.jpg",
                "img/photo3.jpg",
                "img/photo4.jpg",
                "img/photo5.jpg"
            ],
            imageIndex: 0
        },
        methods: {
            prevImage: function () {
                this.imageIndex--;

                if (this.imageIndex == -1) {
                    this.imageIndex = this.images.length - 1;
                }
            },
            nextImage: function () {
                this.imageIndex++;

                if (this.imageIndex == this.images.length) {
                    this.imageIndex = 0;
                }
            }
        }
    }
);