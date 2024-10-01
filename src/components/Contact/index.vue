<template>
    <div class="col-md-7 col-lg-8">
        <h4 class="mb-3">Contact</h4>
        <form class="needs-validation" novalidate="true">
            <div class="row g-3">
                <div class="col-sm-6">
                    <label for="firstName" class="form-label">First Name</label>
                    <input type="text" class="form-control" id="firstName" placeholder="" value="" required>
                    <div class="invalid-feedback">
                        Valid first name is required.
                    </div>
                </div>

                <div class="col-sm-6">
                    <label for="lastName" class="form-label">Last Name</label>
                    <input type="text" class="form-control" id="lastName" placeholder="" value="" required>
                    <div class="invalid-feedback">
                        Valid last name is required.
                    </div>
                </div>
            </div>

            <div class="col-12">
                <label for="username" class="form-label">Username</label>
                <div class="input-group has-validation">
                    <span class="input-group-text">@</span>
                    <input type="text" class="form-control" id="username" placeholder="Username" required>
                    <div class="invalid-feedback">
                        Your username is required.
                    </div>
                </div>
            </div>

            <div class="col-12">
                <label for="country" class="form-label">Country</label>
                <select class="form-select" id="country" required>
                    <option value="">Choose...</option>
                    <option>United States</option>
                </select>
                <div class="invalid-feedback">
                    Please select a valid country.
                </div>
            </div>

            <div class="col-12">
                <label for="state" class="form-label">State</label>
                <input type="text" class="form-control" id="state" placeholder="State" required>
                <div class="invalid-feedback">
                    Please provide a valid state.
                </div>
            </div>

            <div class="col-12">
                <label for="zip" class="form-label">Zip Code</label>
                <input type="text" class="form-control" id="zip" placeholder="Zip code" required>
                <div class="invalid-feedback">
                    Zip code is required.
                </div>
            </div>
        </form>
    </div>
</template>
