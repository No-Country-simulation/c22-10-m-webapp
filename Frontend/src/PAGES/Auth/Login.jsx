import { useState } from "react";
import { useForm } from "react-hook-form";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false); // Estado para alternar visibilidad

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="formulario">
      <h4>Iniciar Sesión</h4>

      <input
        {...register("mail", { required: "El Email es requerido" })}
        aria-invalid={errors.mail ? "true" : "false"}
        className="inputs"
        placeholder="E-mail"
      />
      {errors.mail && <p role="alert">{errors.mail.message}</p>}
      <div className="container-password">
        <input
          {...register("password", {
            required: "La contraseña es obligatoria",
            minLength: {
              value: 6,
              message: "La contraseña debe tener al menos 6 caracteres",
            },
          })}
          aria-invalid={errors.password ? "true" : "false"}
          className="inputs"
          placeholder="Contraseña"
          type={showPassword ? "text" : "password"}
        />
        <button
          type="button"
          className="toggle-password"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? (
            <EyeSlashIcon
              style={{
                color: "rgba(240, 248, 255, 0.616)",
                height: "24px",
                width: "24px",
              }}
            />
          ) : (
            <EyeIcon
              style={{
                color: "rgba(240, 248, 255, 0.616)",
                height: "24px",
                width: "24px",
              }}
            />
          )}{" "}
          {/* Ícono del ojo */}
        </button>
      </div>
      {errors.password && <p role="alert">{errors.password.message}</p>}
      <button type="submit" className="inputs submit-btn">
        Iniciar sesión
      </button>
    </form>
  );
};
