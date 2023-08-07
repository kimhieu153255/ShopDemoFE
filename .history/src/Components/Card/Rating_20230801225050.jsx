const Rating = () => {
  return <div>
    <div class="max-w-md mx-auto bg-white rounded-lg p-4 shadow">
    <h2 class="text-xl font-semibold mb-2">Đánh giá sản phẩm</h2>
    <div class="flex items-center">
      <span class="text-gray-600 mr-2">Đánh giá:</span>
      <div class="flex">
        <label for="star1" class="text-yellow-400 cursor-pointer">
          <input type="radio" id="star1" name="rating" value="1" class="hidden">
          <svg class="w-6 h-6 fill-current" viewBox="0 0 20 20">
            <path d="M10 1l2.928 5.472 6.072.928-4.392 4.328 1.036 6.048-5.644-2.972-5.644 2.972 1.036-6.048L1 7.4l6.072-.928L10 1zm0 2.8L7.288 6.344l-3.132.48 2.268 2.24-.536 3.12L10 11.592l2.112 1.112-.536-3.12 2.268-2.24-3.132-.48L10 3.8zm0 1.008l1.672 3.112 3.4.528-2.48 2.448.584 3.392L10 13.2l-2.776 1.472.584-3.392-2.48-2.448 3.4-.528L10 4.808z"></path>
          </svg>
        </label>
        <label for="star2" class="text-yellow-400 cursor-pointer">
          <input type="radio" id="star2" name="rating" value="2" class="hidden">
          <svg class="w-6 h-6 fill-current" viewBox="0 0 20 20">
            <path d="M10 1l2.928 5.472 6.072.928-4.392 4.328 1.036 6.048-5.644-2.972-5.644 2.972 1.036-6.048L1 7.4l6.072-.928L10 1zm0 2.8L7.288 6.344l-3.132.48 2.268 2.24-.536 3.12L10 11.592l2.112 1.112-.536-3.12 2.268-2.24-3.132-.48L10 3.8zm0 1.008l1.672 3.112 3.4.528-2.48 2.448.584 3.392L10 13.2l-2.776 1.472.584-3.392-2.48-2.448 3.4-.528L10 4.808z"></path>
          </svg>
        </label>
        <label for="star3" class="text-yellow-400 cursor-pointer">
          <input type="radio" id="star3" name="rating" value="3" class="hidden">
          <svg class="w-6 h-6 fill-current" viewBox="0 0 20 20">
            <path d="M10 1l2.928 5.472 6.072.928-4.392 4.328 1.036 6.048-5.644-2.972-5.644 2.972 1.036-6.048L1 7.4l6.072-.928L10 1zm0 2.8L7.288 6.344l-3.132.48 2.268 2.24-.536 3.12L10 11.592l2.112 1.112-.536-3.12 2.268-2.24-3.132-.48L10 3.8zm0 1.008l1.672 3.112 3.4.528-2.48 2.448.584 3.392L10 13.2l-2.776 1.472.584-3.392-2.48-2.448 3.4-.528L10 4.808z"></path>
          </svg>
        </label>
        <label for="star4" class="text-yellow-400 cursor-pointer">
          <input type="radio" id="star4" name="rating" value="4" class="hidden">
          <svg class="w-6 h-6 fill-current" viewBox="0 0 20 20">
            <path d="M10 1l2.928 5.472 6.072.928-4.392 4.328 1.036 6.048-5.644-2.972-5.644 2.972 1.036-6.048L1 7.4l6.072-.928L10 1zm0 2.8L7.288 6.344l-3.132.48 2.268 2.24-.536 3.12L10 11.592l2.112 1.112-.536-3.12 2.268-2.24-3.132-.48L10 3.8zm0 1.008l1.672 3.112 3.4.528-2.48 2.448.584 3.392L10 13.2l-2.776 1.472.584-3.392-2.48-2.448 3.4-.528L10 4.808z"></path>
          </svg>
        </label>
        <label for="star5" class="text-yellow-400 cursor-pointer">
          <input type="radio" id="star5" name="rating" value="5" class="hidden">
          <svg class="w-6 h-6 fill-current" viewBox="0 0 20 20">
            <path d="M10 1l2.928 5.472 6.072.928-4.392 4.328 1.036 6.048-5.644-2.972-5.644 2.972 1.036-6.048L1 7.4l6.072-.928L10 1zm0 2.8L7.288 6.344l-3.132.48 2.268 2.24-.536 3.12L10 11.592l2.112 1.112-.536-3.12 2.268-2.24-3.132-.48L10 3.8zm0 1.008l1.672 3.112 3.4.528-2.48 2.448.584 3.392L10 13.2l-2.776 1.472.584-3.392-2.48-2.448 3.4-.528L10 4.808z"></path>
          </svg>
        </label>
      </div>
    </div>
  </div>
  </div>;
};

export default Rating;
